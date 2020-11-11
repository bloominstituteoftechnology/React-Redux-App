import axios from "axios";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUser = () => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(`https://api.github.com/users/cjgodfather`)
    .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USER_FAIL, payload: err }));
};
