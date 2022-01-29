import React from "react";
import "./Paystack.css";
import { PaystackButton } from "react-paystack";
import { useStateValue } from "../StateProvider";
import { actionTypes, getBasketTotal } from "../reducer";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Paystack = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  //have the value of the subTotal in INT instead of strings
  const value = parseInt(getBasketTotal(basket) * 100);
  const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964";
  const amount = value;
  const email = user?.email;

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: (preference) => {
      alert("Thanks for doing business with us! Come back soon!!");
      const orderRef = doc(
        db,
        "users",
        user?.uid,
        "order",
        preference?.reference
      );
      const payload = {
        basket: basket,
        amount: value,
        created: serverTimestamp(),
      };
      setDoc(orderRef, payload);
      dispatch({
        type: actionTypes.CLEAR_BASKET,
      });
      console.log(preference?.reference);
      navigate("/order");
    },

    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="paystack">
      <Avatar src="cardpayments.jpg" />
      <PaystackButton {...componentProps} className="paystack__btn" />
    </div>
  );
};
// function Paystack() {
//   return <div className="payment">

//   </div>;
// }

export default Paystack;
