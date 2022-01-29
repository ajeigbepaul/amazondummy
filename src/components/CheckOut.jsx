import React from "react";
import "./Checkout.css";
import CheckOutProducts from "./CheckOutProducts";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";

function CheckOut() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="amazoncheckout.jpg" alt="checkoutimg" />
        <small>{user?.email}</small>
        <div className="checkout__header">
          <h2>Shopping Cart</h2>
          <span>Price</span>
        </div>
        <FlipMove>
          {basket.map((item) => (
            <CheckOutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              ratings={item.ratings}
              price={item.price}
            />
          ))}
        </FlipMove>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
