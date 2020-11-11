import {
  FETCH_DOG_DATA_START,
  FETCH_DOG_DATA_SUCCESS,
  FETCH_DOG_DATA_FAILURE
} from '../actions';

const initialState = {
  dogs: [],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_DOG_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dogs: action.payload,
        error: ''
      };
    default:
      return state;
  }
};
