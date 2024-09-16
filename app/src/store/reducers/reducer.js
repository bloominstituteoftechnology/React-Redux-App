import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "../actions/actions";
  
  export const initialState = {
    data: {},
    launch_site: {},
    isFetching: false,
    error: "",
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload,
          launch_site: action.payload,
          error: "",
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };