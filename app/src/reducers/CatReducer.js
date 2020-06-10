import { FETCH_DATA, UPDATE_CATS, SET_ERROR } from "../actions";

const initialState = {
  genre: [],
  isFetchingData: false,
  error: "",
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        genre: [],
      };
    case UPDATE_CATS:
      return {
        ...state,
        genre: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
