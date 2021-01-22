import {
  FETCH_LYRICS_START,
  FETCH_LYRICS_SUCCESS,
  FETCH_LYRICS_FAIL,
} from '../actions/index';

const initialState = {
  lyrics: '',
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LYRICS_START:
      return { ...state, lyrics: '', error: '' };
    case FETCH_LYRICS_SUCCESS:
      return { ...state, lyrics: action.payload, error: '' };
    case FETCH_LYRICS_FAIL:
      return { ...state, lyrics: '', error: action.payload };
    default:
      return state;
  }
};
