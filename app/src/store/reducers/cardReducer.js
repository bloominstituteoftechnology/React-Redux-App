import { FETCHING_CARDS_START, FETCH_CARDS_SUCCESS } from "../actions";

const initialState = {
  cards: [],
  isLoading: false,
  error: "",
  page: 0,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CARDS_START:
      return {
        ...state,
        cards: [],
        isLoading: true,
        error: "",
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
        page: state.page + 1,
      };
    default:
      return state;
  }
};