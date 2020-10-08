import axios from "axios";

export const FETCH_HOLIDAYS_START = "FETCH_HOLIDAYS_START";
export const FETCH_HOLIDAYS_SUCCESS = "FETCH_HOLIDAYS_SUCCESS";

export const fetchHolidays = (url) => (dispatch) => {
  dispatch({ type: FETCH_HOLIDAYS_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_HOLIDAYS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
