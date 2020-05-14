import axios from "axios";

// Define vars for strings so you don't go straight to default
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// thunks go here
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("https://api.spacexdata.com/v3/launches/latest")
      .then((response) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DATA_FAILURE,
          payload: `Error ${error.response.status}: ${error.response.data}`,
        });
      });
  };
};