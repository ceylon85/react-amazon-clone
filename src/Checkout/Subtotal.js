import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* Price */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              총 상품금액 ({basket.length} 개): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> 선물포장을 원하시면 체크를 해주세요
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          !user ? history.push("/login") : history.push("/payment");
        }}
      >
        주문하기
      </button>
    </div>
  );
}

export default Subtotal;
