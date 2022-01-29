import React from "react";
import "./Orderitem.css";
import moment from "moment";
import CheckOutProducts from "./CheckOutProducts";

import CurrencyFormat from "react-currency-format";

function OrderItem({ orders: { id, data } }) {
  return (
    <div className="orderitem">
      <h4>Your Order</h4>
      <p>{moment.unix(data.created).format("MMMM Do, YYYY H:mma")}</p>
      <p className="orderitem__id">
        <small>{id}</small>
      </p>
      {data.basket.map((order) => (
        <div className="orderitem__checkout">
          <CheckOutProducts
            id={order.id}
            title={order.title}
            image={order.image}
            ratings={order.ratings}
            price={order.price}
            hideButton
          />
        </div>
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="orderitem__total">
              Order Total:
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"#"}
      />
    </div>
  );
}

export default OrderItem;
