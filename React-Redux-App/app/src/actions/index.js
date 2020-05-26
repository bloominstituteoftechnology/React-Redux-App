import axios from "axios";

export const FETCH_BREWERIES_START = "FETCH_BREWERIES_START";
export const FETCH_BREWERIES_SUCCESS = "FETCH_BREWERIES_SUCCESS";
export const FETCH_BREWERIES_FAILURE = "FETCH_BREWERIES_FAILURE";

export const getBreweries = (cityName) => (dispatch) => {
  dispatch({ type: FETCH_BREWERIES_START });
  axios
    .get(`https://api.openbrewerydb.org/breweries?by_city=${cityName}&per_page=10`)
    .then((res) => {
      dispatch({ type: FETCH_BREWERIES_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BREWERIES_FAILURE,
        payload: `${err.response.status}: Page not found`,
      });
      console.log(err)
    });
};
