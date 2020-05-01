import {
    FETCHING_BOOK_START,
    FETCHING_BOOK_SUCCESS,
    FETCHING_BOOK_FAILURE
  } from "../actions";
  
  const initialState = {
    book: "",
    isFetching: false,
    error: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_BOOK_START:
        return {...state, isFetching: true};
      case FETCHING_BOOK_SUCCESS:
        return {...state, isFetching: false, book: action.payload};
      case FETCHING_BOOK_FAILURE:
        return {...state, isFetching: false, error: "There was an error."};
      default:
        return state;
    }
  };
  
  export default reducer;