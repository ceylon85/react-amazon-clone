export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    // Logic for adding item to basket
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // Logic for removing item from basket
    case "REMOVE_FROM_BASKET":
      // 장바구니 복제
      let newBasket = [...state.basket];
      //제품 존재여부 확인
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // 제품이 있으면 그것을 제거
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `바구니에 id:${action.id}가 없어서 상품을 제거할 수 없습니다.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
