import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WOEID_START,
  FETCH_WOEID_SUCCESS,
  FETCH_WOEID_FAILURE,
} from "../actions";

const initialState = {
  woeid: 2430683,
  weather: [],
  isLoading: true,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Error Loading Weather",
      };
    case FETCH_WOEID_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WOEID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        woeid: action.payload,
      };
    case FETCH_WOEID_FAILURE:
      return {
        isLoading: false,
        error: "Error Loading Location",
      };
    default:
      return state;
  }
};
