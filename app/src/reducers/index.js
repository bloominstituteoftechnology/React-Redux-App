import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

const initialState = {
  is_fetching: false,
  cardList: [],
  error: ""
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        is_fetching: true
      };
    case DATA_LOAD_SUCCESS: {
      return {
        ...state,
        is_fetching: false,
        cardlist: action.payload
      };
    }
    case DATA_LOAD_ERROR: {
      return {
        ...state,
        is_fetching: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
