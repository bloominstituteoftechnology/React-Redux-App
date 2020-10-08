import {
  FETCH_HOLIDAYS_ERROR,
  FETCH_HOLIDAYS_START,
  FETCH_HOLIDAYS_SUCCESS,
} from "../actions";

const initialState = {
  holidays: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOLIDAYS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_HOLIDAYS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        holidays: action.payload,
      };
    case FETCH_HOLIDAYS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
