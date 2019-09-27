import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL
} from '../actions';

const initialState = {
  jobs: [],
  error: "",
  isFetching: false
}

function reducer( state = initialState, action ) {
  switch( action.type ){
    case FETCH_JOBS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        jobs: action.payload
      };
    case FETCH_JOBS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
