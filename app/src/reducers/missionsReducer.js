import {
  MISSIONS_START,
  MISSIONS_SUCCESS,
  MISSIONS_FAILURE
} from '../actions/fetchMissions'

export const initialState = {
  isFetching: false,
  missions: [],
  errors: ''
}

export const missionsReducer = (state = initialState, action) => {
  console.log('The missions reducer has been accessed');
  switch(action.type) {
    case MISSIONS_START:
      console.log('MISSIONS_START');
      return {
        ...state,
        isFetching: true
      }
    case MISSIONS_SUCCESS:
      console.log('MISSIONS_SUCCESS');
      return {
        ...state,
        isFetching: false,
        missions: action.payload
      }
    case MISSIONS_FAILURE:
      console.log('MISSIONS_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}