import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf"
      )
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        console.log("NASA DATA:", res.data);
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};

// https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf
