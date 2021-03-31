import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__info">
        <div className="checkoutProduct__divide__1">
          <img className="checkoutProduct__image" src={image} alt="" />
        </div>
        <div className="checkoutProduct__divide__2">
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="checkoutProduct__divide__3">
          <p className="checkoutProduct__title">{title}</p>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="rating">
                🌟
              </span>
            ))}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
