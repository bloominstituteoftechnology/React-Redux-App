const FUNNY_STUFF_ARRIVED = "FUNNY_STUFF_ARRIVED";
const COLLECTING_FUNNY_STUFF = "COLLECTING_FUNNY_STUFF";


const initialState = {
  loadingFunny: false,
  activity: null,
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
    default:
      return state;
  }
};
