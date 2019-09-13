
import {FETCH_WEATHER_DATA_START, FETCH_WEATHER_DATA_SUCCESS} from "../actions";
  
  const initialState = {
    weather: [],
    isLoading: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCH_WEATHER_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          weather: [action.payload],
          error: ""
        };
      default:
        return state;
    }
  };

