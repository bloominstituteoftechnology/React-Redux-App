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

export const FETCH_WOEID_START = "FETCH_WOEID_START";
export const FETCH_WOEID_SUCCESS = "FETCH_WOEID_SUCCESS";
export const FETCH_WOEID_FAILURE = "FETCH_WOEID_FAILURE";
export const fetchWoeid = (location) => (dispatch) => {
  dispatch({ type: FETCH_WOEID_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`
    )
    .then((res) => {
      //   console.log(res.data);
      dispatch({ type: FETCH_WOEID_SUCCESS, payload: res.data[0].woeid });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_WOEID_FAILURE, payload: err.message });
    });
};
