import {
    FETCH_TEAMS_START,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
  } from "../actions";
  
  const initialState = {
    isLoading: false,
    teams: [],
    error: ""
  };
  
 
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TEAMS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_TEAMS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          teams: action.payload,
          error: ""
        };
      case FETCH_TEAMS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  