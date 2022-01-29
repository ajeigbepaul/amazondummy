import React from "react";
import "./Checkoutproduct.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { forwardRef } from "react";

const CheckOutProducts = forwardRef(
  ({ id, title, ratings, price, image, hideButton }, ref) => {
    const [state, dispatch] = useStateValue();
    const deleteProduct = () => {
      dispatch({
        type: actionTypes.DELETE_FROM_BASKET,
        id: id,
      });
    };
    return (
      <div className="checkoutproduct" ref={ref}>
        <div className="checkoutproduct__left">
          <div className="checkoutproduct__image">
            <img src={image} alt="productimg" />
          </div>
          <div className="checkoutproduct__info">
            <div className="checkproduct__info">
              <p className="title">{title}</p>
              <p className="product__ratings">
                {Array(ratings)
                  .fill()
                  .map(() => (
                    <StarRateIcon fontSize="small" className="product__color" />
                  ))}
              </p>
            </div>
            {!hideButton && (
              <button className="checkoutproduct__btn" onClick={deleteProduct}>
                Delete from checkout
              </button>
            )}
          </div>
        </div>
        <div className="checkoutproduct__right">
          <h2>$</h2>
          <h2>{price}</h2>
        </div>
      </div>
    );
  }
);

export default CheckOutProducts;
