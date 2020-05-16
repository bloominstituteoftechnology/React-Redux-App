import {
  HISTORY_START,
  HISTORY_SUCCESS,
  HISTORY_FAILURE
} from '../actions/fetchHistory'

export const initialState = {
  isFetching: false,
  history: [],
  errors: ''
}

export const historyReducer = (state = initialState, action) => {
  console.log('The info reducer has been accessed');
  switch(action.type) {
    case HISTORY_START:
      console.log('HISTORY_START');
      return {
        ...state,
        isFetching: true
      }
    case HISTORY_SUCCESS:
      console.log('HISTORY_SUCCESS');
      return {
        ...state,
        isFetching: false,
        history: action.payload
      }
    case HISTORY_FAILURE:
      console.log('HISTORY_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}