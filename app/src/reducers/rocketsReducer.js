import {
  ROCKETS_START,
  ROCKETS_SUCCESS,
  ROCKETS_FAILURE
} from '../actions/fetchRockets'

export const initialState = {
  isFetching: false,
  rockets: [],
  errors: ''
}

export const rocketsReducer = (state = initialState, action) => {
  console.log('The rockets reducer has been accessed');
  switch(action.type) {
    case ROCKETS_START:
      console.log('ROCKETS_START');
      return {
        ...state,
        isFetching: true
      }
    case ROCKETS_SUCCESS:
      console.log('ROCKETS_SUCCESS');
      return {
        ...state,
        isFetching: false,
        rockets: action.payload
      }
    case ROCKETS_FAILURE:
      console.log('ROCKETS_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}