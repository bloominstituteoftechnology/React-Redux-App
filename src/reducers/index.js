import { 
  FETCH_QUOTE_START, 
  FETCH_QUOTE_SUCCESS, 
  FETCH_QUOTE_FAILURE,
  ADD_FAVORITE
  } from '../actions/index';

const initialState = {
  quote: {
    quote: null,
    favorite: false
  },
  isFetching: false,
  error: '',
  favorites: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_QUOTE_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: {
          ...state,
          quote: action.payload},
        isFetching: false,
        error: ''
      }
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_FAVORITE:
      return {
        ...state,
        quote: {
          ...state.quote,
          favorite: true
        },
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}