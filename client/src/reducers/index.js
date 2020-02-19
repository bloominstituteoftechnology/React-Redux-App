import { FETCH_DATA, NEW_QUOTE, SET_ERROR } from "../actions";

const initState = {
  quotes: [],
  loading: false,
  error: ""
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        quotes: []
      };
    case NEW_QUOTE:
      return {
        ...state,
        loading: false,
        quotes: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
