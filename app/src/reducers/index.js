import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS
  } from "../actions";
  
  const initialState = {
    title: "Kanye Quotes",
    editing: false,
    loading: false,
    quote: null,
    isFetching: false,
    error: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_QUOTE_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_QUOTE_SUCCESS:
        return {
          ...state,
          quote: action.payload,
          isFetching: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      default:
        return state;
    }
  };
  