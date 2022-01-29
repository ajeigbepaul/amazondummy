export const initialState = {
  basket: [],
  user: null,
};
export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  DELETE_FROM_BASKET: " DELETE_FROM_BASKET",
  SET_USER: "SET_USER",
  CLEAR_BASKET: "CLEAR_BASKET",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };

    case actionTypes.DELETE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
