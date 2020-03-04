import { FETCH_ANIMES, UPDATE_ANIMES, SET_ERROR } from "../actions";

const initialState = {
  animes: [],
  isFetching: false,
  error: ""
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMES:
      return {
        ...state,
        isFetching: true,
        animes: []
      };
    case UPDATE_ANIMES:
      return {
        ...state,
        animes: action.payload,
        isFetching: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};