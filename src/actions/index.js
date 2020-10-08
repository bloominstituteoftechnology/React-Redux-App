import axios from "axios";

export const FETCH_HOLIDAYS_START = "FETCH_HOLIDAYS_START";
export const FETCH_HOLIDAYS_SUCCESS = "FETCH_HOLIDAYS_SUCCESS";
export const FETCH_HOLIDAYS_ERROR = "FETCH_HOLIDAYS_ERROR";

export const fetchHolidays = (url) => (dispatch) => {
  dispatch({ type: FETCH_HOLIDAYS_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_HOLIDAYS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_HOLIDAYS_ERROR,
        payload: `ERROR in fetchHolidays:  ${err}`,
      });
    });
};
