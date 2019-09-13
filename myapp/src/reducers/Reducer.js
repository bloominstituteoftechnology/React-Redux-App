import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
  } from '../actions';
  
  const initialState = {
    dogs: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dogs: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };

