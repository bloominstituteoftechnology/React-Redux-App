import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CATS = "UPDATE_CATS";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://aws.random.cat/meow")
    .then(res => {
      console.log("API SUCCESSFUL", res.data);
      dispatch({ type: UPDATE_CATS, payload: res.data })
    })
    .catch(err => {
      console.error("error fetching data ~ ", err);
    });
};
