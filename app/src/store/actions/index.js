import axios from "axios";

export const FETCH_WEATHER_START = "FETCH_WEATHER_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeather = (woeid) => (dispatch) => {
  dispatch({ type: FETCH_WEATHER_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    )
    .then((res) => {
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_WEATHER_FAILURE, payload: err.message });
    });
};
