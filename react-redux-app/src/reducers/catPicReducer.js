import { FETCH_CAT_START, 
  FETCH_CAT_SUCCESS, 
  FETCH_CAT_FAILURE} from '../actions/catPicAction';

export const initialState = {
  cat: {},
  isFetching: false,
  error: '',
  id: 1234,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CAT_START:
      return {
        ...state, 
        cat: {},
        isFetching: true
      }
    case FETCH_CAT_SUCCESS:
      return {
        ...state, 
        cat: action.payload,
        isFetching: false,
      }
    case FETCH_CAT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    
    default:
      return state;
  }
}

export default reducer;