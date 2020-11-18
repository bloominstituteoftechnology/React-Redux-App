import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

const initialState = {
  //START_FETCHING_DATA
  is_fetching: false,
  drinklist: [],
  error: ""
};

const drinkReducer = (state = initialState, action) => {
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
        drinklist: action.payload
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

export default drinkReducer;