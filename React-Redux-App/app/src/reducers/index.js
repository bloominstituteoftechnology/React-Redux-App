import {
    FETCH_BREWERIES_FAILURE,
    FETCH_BREWERIES_START,
    FETCH_BREWERIES_SUCCESS,
  } from "../actions";
  
  const initialState = {
    isFetching: false,
    error: "",
    breweries: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BREWERIES_START:
        return { ...state, error: "", isFetching: true };
      case FETCH_BREWERIES_FAILURE:
        return { ...state, error: action.payload, isFetching: false };
      case FETCH_BREWERIES_SUCCESS:
        return { ...state, breweries: action.payload, isFetching: false };
      default:
        return state;
    }
  };