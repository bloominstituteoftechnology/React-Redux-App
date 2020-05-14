import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCES = "FETCH_DATA_SUCCES";

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios
      .get("https://api.coingecko.com/api/v3/coins/pegnet")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_DATA_SUCCES, payload: res.data });
        // res.data are objects
      })
      .catch(err => console.log(err));
  };
};
