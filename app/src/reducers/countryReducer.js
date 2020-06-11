import { DATA_GET, DATA_SUCCESS, DATA_ERROR } from "../actions/actions";

const initialState = {
  countriesList: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_GET:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countriesList: action.payload,
        error: "",
      };
    case DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
