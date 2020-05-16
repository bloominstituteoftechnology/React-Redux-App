import {
  INFO_START,
  INFO_SUCCESS,
  INFO_FAILURE
} from '../actions/fetchInfo'

export const initialState = {
  isFetching: false,
  data: [],
  errors: ''
}

export const infoReducer = (state = initialState, action) => {
  console.log('The info reducer has been accessed');
  switch(action.type) {
    case INFO_START:
      console.log('INFO_START');
      return {
        ...state,
        isFetching: true
      }
    case INFO_SUCCESS:
      console.log('INFO_SUCCESS');
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case INFO_FAILURE:
      console.log('INFO_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}