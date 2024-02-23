import { SET_CART, SET_USER, REMOVE_ITEM_FROM_CART } from "./action";

let oldCart = localStorage.getItem("cart");
oldCart = oldCart ? JSON.parse(oldCart) : [];
const initialState = {
  cart: oldCart,
  user: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
     localStorage.setItem('cart',JSON.stringify(action.payload));
      return { ...state, cart: action.payload };
    case SET_USER:
     localStorage.setItem('cart',JSON.stringify(action.payload));
      return { ...state, user: action.payload };
      case REMOVE_ITEM_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.product.id !== action.payload)
        };
  }
  return state;
};

export default rootReducer;