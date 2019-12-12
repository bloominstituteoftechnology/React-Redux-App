import {
    FETCHING_CATIMAGE_START,
    FETCHING_CATIMAGE_SUCCESS,
    FETCHING_CATIMAGE_FAILURE
  } from "../actions";
  
  const initialState = {
    catImage: null,
    isFetching: false,
    error: ""
  };
  
  export const catImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_CATIMAGE_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_CATIMAGE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          catImage: action.payload
        };
      case FETCHING_CATIMAGE_FAILURE:
        return {
          ...state,
          isFetching: false,
          catImage: action.payload
        };
      default:
        return state;
    }
  };