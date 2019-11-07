import {
  SUMMON_CHUCK_JOKE_REFUSED,
  SUMMON_CHUCK_JOKE_APPROVED,
  SUMMON_CHUCK_JOKE
} from "../actions/index";

//setting initial state...
const initialState = {
  joke: {},
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case SUMMON_CHUCK_JOKE:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUMMON_CHUCK_JOKE_APPROVED:
      return {
        ...state,
        joke: action.payload,
        isFetching: true,
        error: null
      };
    case SUMMON_CHUCK_JOKE_REFUSED:
      return {
        ...state,
        joke: {},
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default reducer;
