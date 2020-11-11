import { ANIME_LOADING, ANIME_SUCCESS, ANIME_FAIL } from '../actions';

const initialState = {
  articles: [],
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case ANIME_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case ANIME_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isFetching: false,
        error: null
      }
    case ANIME_FAIL:
      return {
        ...state,
        articles: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;