import { FETCHING_PRICE_START, FETCHING_PRICE_SUCCESS, FETCHING_MARKETCAP_START, FETCHING_MARKETCAP_SUCCESS } from '../actions';

const initialState = {
  prices: [],
  marketCap: [],
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
    case FETCHING_MARKETCAP_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCHING_MARKETCAP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        marketCap: action.payload
      }
    default:
      return state
  }
}