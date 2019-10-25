import {
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILED
} from "../actions/questions";

const initialState = {
  results: [],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
        isLoading: false
      };
    case FETCH_QUESTIONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
