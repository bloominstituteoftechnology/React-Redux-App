import {
 
   GET_DOG_LIST,
    FETCHING_DOGS_SUCCESS,
    FETCHING_DOGS_ERROR
  } from "../actions";


const initialState = {
  doggos: []
  };

  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DOG_LIST:
        console.log("fetching a new joke");
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_DOGS_SUCCESS:
        return { ...state, doggos: action.payload, isFetching: false };
      case FETCHING_DOGS_ERROR:
        return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
    }
  };