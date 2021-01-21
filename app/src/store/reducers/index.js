import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions";

const initialState = {
  products: [],
  loadingProducts: true,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loadingProducts: true,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state, // handle the error
        loadingProducts: false,
        errorMessage: action.payload.message,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loadingProducts: false,
      };
    default:
      return state;
  }
};
