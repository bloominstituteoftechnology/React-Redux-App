import {
    FETCH_INSULT_START,
    FETCH_INSULT_SUCCESS,
    FETCH_INSULT_FAIL
  } from '../actions/index';
  
  const initialState = {
    insult: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_INSULT_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_INSULT_SUCCESS:
        return {
          ...state,
          insult: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_INSULT_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;