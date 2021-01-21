import {FETCH_DATA_FAIL, FETCH_DATA_START, FETCH_DATA_SUCCESS} from "./../actions"

const initialState = {
  shoes: [],
  //empty array for the shoes.
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
        shoes: '',
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        shoes: action.payload
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