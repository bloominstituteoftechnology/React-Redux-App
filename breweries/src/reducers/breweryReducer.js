import {FETCH_BREWERIES_START, FETCH_BREWERIES_SUCCESS, FETCH_BREWERIES_FAILURE} from '../actions/actionIndex'

const initialState = {
  breweries: [],
  isFetching: false,
  error: ''
}

const breweryReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_BREWERIES_START:
      return {...state, 
      isFetching: true,
      error: ''};
    case FETCH_BREWERIES_SUCCESS:
      return {...state, isFetching: false,
      breweries: action.payload};
    case FETCH_BREWERIES_FAILURE:
      return {...state, error: action.payload}
    default: return {...state}
  }
}

export default breweryReducer