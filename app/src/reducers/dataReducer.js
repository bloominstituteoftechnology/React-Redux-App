
import {
  FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL
} from "../actions/actions"

const initialState = {
  data: [],
  error: '',
  isFetching: false
};

// default parameters (advanced JS feature)
export const dataReducer = (state=initialState, action) => {
  switch(action.type){
    case  FETCH_START: 
    return {
      ...state,
      isFetching:true,
      error:""
    }
    case  FETCH_SUCCESS: 
    return {
      ...state,
      data:action.payload,
      isFetching:false,
      error:""
    }
    case  FETCH_FAIL: 
    return {
      ...state,
      error:""
    }
    default:
      return state;
  }
  
};


