import { FETCH_STOCKINFO_START } from "../actions/actions";
import { FETCH_STOCKINFO_SUCCESS } from "../actions/actions";
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

    case FETCH_STOCKINFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        date: action.payload["Meta Data"]["3. Last Refreshed"],
        stocks: [
          ...state.stocks,
          action.payload["Time Series (Daily)"]["2020-10-06"]["4. close"],
        ],
      };
    // case FETCH_STOCKINFO_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     stocks: action.payload,
    //   };
    default:
      return state;
  }
};

// ["Time Series (Daily)"].date
