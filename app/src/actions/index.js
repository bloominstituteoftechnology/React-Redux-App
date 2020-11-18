import axios from "axios";
export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadDataForLocation = (location) => (dispatch) => {

    dispatch({ type: IS_LOADING });
  
  const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  axios
    .get(apiUrl)
    .then((res) => {
      console.log(
        res
      );
      dispatch({ type: DATA_LOAD_SUCCESS, payload: res.data.all });
    })
    .catch((err) => {
      console.log(
        err
      );
      console.log(err.request);
      dispatch({
        type: DATA_LOAD_ERROR,
        payload: `error fetching data: ${err.message}`
      });
    });
};
