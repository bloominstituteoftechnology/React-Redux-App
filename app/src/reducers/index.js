const initialState = {
  loading: false,
  isFetching: false,
  dog: "placeholder dog",
  error: ""
};

export const FETCHING_DOG_START = "FETCHING_DOG_START";
export const FETCHING_DOG_SUCCESS = "FETCHING_DOG_SUCCESS";
export const FETCHING_DOG_FAILURE = "FETCHING_DOG_FAILURE";

export const dogReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_DOG_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_DOG_SUCCESS:
      return {
        ...state,
        dog: action.payload,
        isFetching: false
      };
    case FETCHING_DOG_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  };
};