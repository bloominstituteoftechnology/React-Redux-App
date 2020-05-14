import { FETCH_DATA_START, FETCH_DATA_SUCCES } from "../actions";

const initialState = {
  isFetching: false,
  peg: [],
  market_data: null,
  error: ""
};

export const pegReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DATA_SUCCES:
      return {
        ...state,
        isFetching: false,
        market_data: action.payload
      };
    default:
      return state;
  }
};
