import { FETCHING_PRICE_START, FETCHING_PRICE_SUCCESS } from '../actions';

const initialState = {
  prices: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRICE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCHING_PRICE_SUCCESS:
      return {
        ...state,
        prices: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}