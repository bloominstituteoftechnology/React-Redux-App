import { FETCHING_QUOTE_START, FETCHING_QUOTE_FAILURE, FETCHING_QUOTE_SUCCESS, FETCHING_AUTHOR_SUCCESS} from '../actions'

const initialState = {
    loading: false,
    error: '',
    quote: '',
    author: ''
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {

      case FETCHING_QUOTE_START:
        return {...state, loading: true }

      case FETCHING_QUOTE_SUCCESS:
        return {...state, loading: false, quote: action.payload}

      case FETCHING_AUTHOR_SUCCESS:
        return {...state, loading: false, author: action.payload}

      case FETCHING_QUOTE_FAILURE:
        return {...state, loading: false, error: action.payload}

      

      default:
        return state;
  }
}