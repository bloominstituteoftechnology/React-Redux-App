import thunk from "redux-thunk"
import {FETCH_DATA_FAIL, FETCH_DATA_START, FETCH_DATA_SUCCSESS} from "./../actions"

const initialState = {
  shoe: '',
  isFetching: false,
  error: '',
}


export function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        isFetching: true,
        shoe: '',
      };
    case FETCH_DATA_SUCCSESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        shoe: action.payload
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}