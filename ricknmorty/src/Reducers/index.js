import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
} from "../Actions/index";

export const initialState = {
  characters: [],
  isFetching: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
      };
    case FETCHING_FAIL:
      return {
        ...state,
        error: action.paylaod,
      };
    default:
      return state;
  }
};
export default reducer;
