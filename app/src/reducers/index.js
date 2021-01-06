import {
    FETCH_DOG_START,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_FAILURE,
  } from "../actions";
  
  const initialState = {
    dogImg: [],
    isFetching: false,
    error: "",
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOG_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_DOG_SUCCESS:
        return {
          ...state,
          isFetching: false,
          dogImg: action.payload,
        };
      case FETCH_DOG_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };