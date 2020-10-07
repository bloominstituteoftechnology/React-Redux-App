import {PREPARED_DATA, UPDATE_INFO, SET_ERROR}from '../actions'


const initialState = {
  isFetching: false,
  info: [],
  error: ''
}





 const reducer = (state =initialState, action) => {
  switch (action.type) {
    case PREPARED_DATA:
      return {
        ...state, isFetching: true,
        info:[]
      }
    case UPDATE_INFO:
      return {
        ...state, info: action.payload, isFetching:false
      }
    case SET_ERROR:
      return {
        ...state, isFetching: false, error: action.payload
      }

    default:
return state;
  }
  
}

export default reducer