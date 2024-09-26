import {
  FETCHING_PERSON_START, // toggle isFetching
  FETCHING_PERSON_SUCCESS, //  update person, toggle isFetching
  FETCHING_PERSON_FAILURE, //  update error, toggle isFetching
} from "../actions/personAction";

const initialState = {
  person: null,
  isFetching: false,
  error: "",
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PERSON_START:
      console.log("Start");
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_PERSON_SUCCESS:
      console.log("Success");
      return {
        ...state,
        person: action.payload,
        isFetching: false,
      };
    case FETCHING_PERSON_FAILURE:
      console.log("Failure");
      return {
        ...state,
        error: "Hit an error",
        isFetching: false,
      };
    default:
      return state;
  }
};
