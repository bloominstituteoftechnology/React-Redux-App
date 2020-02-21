import {
    FETCH_JOKE_START,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE
  } from '../actions';
  
  export const initialState = {
    error: '',
    isFetching: false,
    joke: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOKE_START:
        return {
          ...state,
          error: '',
          isFetching: true,
          joke: ''
        };
      case FETCH_JOKE_SUCCESS:
        return {
          ...state,
          error: '',
          isFetching: false,
          joke: action.payload
        };
      default:
        return state;
    }
  };
  