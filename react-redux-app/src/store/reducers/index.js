// Import action types
import { IS_LOADING, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

// SEtup initial state
const initialState = {
  deals: [],
  isLoading: false,
  errors: "",
};

const dealsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        deals: [],
      };

    case DATA_LOAD_SUCCESS:
      console.log("Data Success");
      return {
        ...state,
        isLoading: false,
        deals: payload,
      };

    case DATA_LOAD_ERROR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default dealsReducer;
