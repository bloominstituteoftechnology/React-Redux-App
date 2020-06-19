import {
  GET_JOKE,
  UPDATE_JOKE,
  GET_SEARCH_RESULTS,
  UPDATE_SEARCH_RESULTS,
} from '../actions';

const initialState = {
  joke: '',
  searchResults: [],
};

export const chuckReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_JOKE:
      return {
        ...state,
        joke: payload,
      };
    case UPDATE_SEARCH_RESULTS:
      let results = payload.map(r => {
        return r.value;
      });
      return {
        ...state,
        searchResults: results,
      };
    default:
      return state;
  }
};
