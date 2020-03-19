import { FETCH_DATA, UPDATE_CATS } from "../actions";

const initialState = {
  file: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        file: []
      };

    case UPDATE_CATS:
      return {
        ...state,
        file: action.payload,
        isFetchingData: false
      };

    default:
      return state;
  }
};