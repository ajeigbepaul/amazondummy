import React from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const Close = () => {
  //   const [state, dispatch] = useStateValue();
  //   const navigate = useNavigate();
  return (
    <div>
      {/* {dispatch({
        type: actionTypes.CLEAR_BASKET,
      })}
      {navigate("/order")}
      {console.log("Hello")} */}
      <h1>Something is still no working</h1>
    </div>
  );
};

export default Close;
