import { FETCH_STOCKINFO_START } from "../actions/actions";
import { FETCH_STOCKINFO_SUCCESS } from "../actions/actions";
import { FETCH_STOCKDATE_SUCCESS } from "../actions/actions";
// import { FETCH_STOCKINFO_FAILURE } from "../actions/actions";

const initialState = {
  stocks: [],
  isLoading: false,
  date: "",
  error: "",
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKINFO_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_STOCKDATE_SUCCESS:
      return {
        ...state,
        date: action.payload["Meta Data"]["3. Last Refreshed"],
      };
    case FETCH_STOCKINFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stocks: [...state.stocks, action.payload],
      };

    default:
      return state;
  }
};
