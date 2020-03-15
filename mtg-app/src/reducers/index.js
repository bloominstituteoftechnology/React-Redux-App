import {
  FETCH_BOOSTER_START,
  BOOSTER_OPEN,
  FETCH_BOOSTER_FAILURE
} from "../actions";

const initialState = {
  set: "",
  cards: [],
  error: "",
  isFetching: false,
  clicked: false
};

function reducer(state = initialState, action) {
  console.log("reducer status", action);
  switch (action.type) {
    /* case SET_SELECT:
      return {
        ...state,
        set: action.payload,
        cards: [],
        error: "",
        isFetching: false
      }; */
    case FETCH_BOOSTER_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case BOOSTER_OPEN:
      return {
        ...state,
        cards: action.payload,
        error: "",
        isFetching: false
      };
    case FETCH_BOOSTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case "CLICK_BOOSTER":
      return {
        ...state,
        clicked: true
      };
    case "RESET_BOOSTER":
      return {
        ...state,
        isFetching: false,
        clicked: false
      };
    default:
      return state;
  }
}
export default reducer;
