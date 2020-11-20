import { LOADING, LOAD_SUCCESS, LOAD_FAIL } from "../actions/index";

const initialState = {
  cards: [],
  isFetching: false,
  err: "",
};

const reducer = (state = initialState, action) => {
  console.log(state.cards);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        err: "",
        cards: action.payload,
        isFetching: false,
      };
    case LOAD_FAIL:
      return {
        ...state,
        err: action.payload.toString(),
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
