import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { logOut } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();
  const handleAuth = () => {
    if (user) {
      logOut();
      navigate("/");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src="amazon.png" alt="logo" />
      </Link>
      <div className="header__search">
        <input />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__navoptions" onClick={handleAuth}>
            <span className="header_navoptionstop">
              {user ? `${user.email}` : "Hello Guest"}
            </span>
            <span className="header_navoptionsdown">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/order">
          <div className="header__navoptions">
            <span className="header_navoptionstop">Return</span>
            <span className="header_navoptionsdown">& Orders</span>
          </div>
        </Link>

        <div className="header__navoptions">
          <span className="header_navoptionstop">Your</span>
          <span className="header_navoptionsdown">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__shoppingcart">
            <ShoppingBasketIcon className="header__cart" />
            <span className="header__shoppingoptions header__shoppingcounts">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
