import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import OrderItem from "./OrderItem";
import "./Order.css";
import db from "../firebase";

function Order() {
  const [{ user }, dispatch] = useStateValue();
  const [order, setOrder] = useState();
  useEffect(() => {
    if (user) {
      const orderRef = collection(db, "users", user?.uid, "order");
      onSnapshot(orderRef, (snapshot) => {
        setOrder(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    } else {
      setOrder([]);
    }
  }, [user]);
  return (
    <div className="order">
      <h1>Your Orders</h1>
      <div className="order__container">
        {order?.map((orders) => (
          <OrderItem orders={orders} />
        ))}
        {/* {console.log(order)} */}
      </div>
    </div>
  );
}

export default Order;
