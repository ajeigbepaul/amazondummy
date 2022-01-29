import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"#"}
      />

      <button className="subtotal__btn" onClick={handlePayment}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default SubTotal;
