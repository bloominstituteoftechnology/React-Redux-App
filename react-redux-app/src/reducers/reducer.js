import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL
} from "../actions/actions";

export const initialState = {
  user: {},
  isFetch: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isFetch: true,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetch: false,
        error: ""
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
