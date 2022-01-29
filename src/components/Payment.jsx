import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import Paystack from "./Paystack";
import FlipMove from "react-flip-move";
import CheckOutProducts from "./CheckOutProducts";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h2 className="payment__header">{`Checkout (${basket?.length} items)`}</h2>
        <div className="payment__section">
          <div className="payment__title">
            <h2>Billing Address</h2>
          </div>
          <div className="payment__info">
            <h2>{user?.email}</h2>
            <h2>km 46 Lekki Epe way, Corner bustop, Lekki Lagos</h2>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__itemtitle">
            <h2>Review items</h2>
          </div>
          <div className="payment__items">
            <FlipMove>
              {basket.map((item) => (
                <CheckOutProducts
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  ratings={item.ratings}
                  price={item.price}
                />
              ))}
            </FlipMove>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">{/* <h2>Payment Method</h2> */}</div>
          <div className="payment__details">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <h2>Total Payment: {value}</h2>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"#"}
            />

            <Paystack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
