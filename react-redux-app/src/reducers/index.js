import {
  FETCHING_API_START,
  FETCHING_API_SUCCESS,
  FETCHING_API_FAILURE,
  SEARCH_VALUE,
} from "../actions";

const log = console.log;

//1. set initialState
const initialState = {
  loading: false,
  error: "",
  searchValue: "",
};

//2. create a features reducer that takes in initialState, sets it equal to state, and takes in an action
export const appReducer = (state = initialState, action) => {
  //3. initialize switch statement
  switch (action.type) {
    case FETCHING_API_START: {
      log("FETCH RUNNING THROUGH REDUCER");
      return { ...state, loading: true };
    }
    case FETCHING_API_SUCCESS: {
      log("FETCH SUCCESS THROUGH REDUCER");
      return { ...state, loading: false, recipe: action.payload };
    }
    case FETCHING_API_FAILURE: {
      log("FETCH FAIL FROM REDUCER");
      return { ...state, loading: false, error: action.payload };
    }
    case SEARCH_VALUE: {
      log("3. SEARCH VALUE FROM REDUCER", action.payload);
      return { ...state, searchValue: action.payload };
    }
    default:
      return state;
  }
};
