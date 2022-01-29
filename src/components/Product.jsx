import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, ratings, image }) {
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        ratings: ratings,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__ratings">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarRateIcon fontSize="small" className="product__color" />
            ))}
        </p>
      </div>
      <div className="product__image">
        <img src={image} alt="prod1" />
      </div>
      <button className="product__addtobucket" onClick={addToCart}>
        Add to Bucket
      </button>
    </div>
  );
}
//onClick={addToCart}
export default Product;
