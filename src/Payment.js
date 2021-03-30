import React, { useState, useEffect } from "react";
import "./Payment.css";
import CheckoutProduct from "./Checkout/CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //고객에게 요금을 부과시킬 수 있는 secret 생성

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe는 통화 하위 단위의 합계를 예상
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The Secret is ===> ", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    //모든 stripe 작업
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //CardElement의 변경사항과 고객이 카드 세부 정보를 입력할 때 오류가 발생하면 표시
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "카드 정보를 다시 입력하세요");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* 배송 주소 */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>배송주소</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>오류동</p>
            <p>서울시 구로구</p>
          </div>
        </div>

        {/* 리뷰 아이템 */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>주문상품</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* 결제 방법 */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>결제방법</h3>
          </div>
          <div className="payment__details">
            {/* Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>총 금액: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
