import {
    COLLECTING_FUNNY_STUFF,
    FUNNY_STUFF_ARRIVED,
    FUNNY_SETUP,
    FUNNY_PUNCHLINE
} from "../actions/jokeActions";

const initialState = {
  loadingFunny: false,
  activity: null,
  setup: "",
  punchline: "",
  error: ""
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTING_FUNNY_STUFF:
      return {
        ...state,
        loadingFunny: true
      };
    case FUNNY_STUFF_ARRIVED:
      return {
        ...state,
        loadingFunny: false,
        activity: action.payload
      };
      case FUNNY_SETUP:
        return {
          ...state,
          loadingFunny: false,
          setup: action.payload
        };
    // case FUNNY_PUNCHLINE:
    //   return {
    //     ...state,
    //     loadingFunny: false,
    //     punchline: action.payload
    //   };
    default:
      return state;
  }
};
