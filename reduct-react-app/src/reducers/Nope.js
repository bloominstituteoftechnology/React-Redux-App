import {
    FETCH_DOG_START,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_ERROR
  } from "../actions/Nope";
  
  const initialState = {
    dog: null,
    isLoading: false,
    error: null
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_DOG_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_DOG_SUCCESS:
        return {
          ...state,
          dog: action.payload,
          isLoading: false
        };
      case FETCH_DOG_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }