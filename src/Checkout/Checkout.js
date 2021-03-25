import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__left">
          {/* <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout"
        /> */}
          {basket?.length === 0 ? (
            <div className="checkout__empty">
              <img
                className="checkout__empty__img"
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="empty__img"
              />

              <div className="checkout__empty__text">
                <h2 className="checkout__empty__title">
                  Your Amazon Cart is empty
                </h2>
                <a className="checkout__empty__td" href="./">
                  {" "}
                  Shop today's deals
                </a>
                <p>
                  You have no items in your basket. To buy or "Add to basket"
                  next to the item
                </p>
              </div>
            </div>
          ) : (
            <div className="checkout__product">
              <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="checkout"
              />
              <h3 className="checkout__userEmail">
                Hello, {!user ? "Guest" : user?.email}
              </h3>
              <div className="checkout__header">
                <h2 className="checkout__title">Shopping Cart </h2>
                <span className="checkout__price">price</span>
              </div>
              {/* List out all of the Checkout Products */}
              {basket?.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

// react-currency-format
export default Checkout;
