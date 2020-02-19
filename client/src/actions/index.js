import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const NEW_QUOTE = "NEW_QUOTE";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(res => {
      // console.log(res);
      dispatch({ type: NEW_QUOTE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "something went wrong" });
    });
};
