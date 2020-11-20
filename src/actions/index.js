import axios from "axios";

export const LOADING = "LOADING";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

export const loadData = (id) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://api.magicthegathering.io/v1/sets/${id}/booster`)
    .then((res) => {
      dispatch({ type: LOAD_SUCCESS, payload: res.data.cards });
    })
    .catch((err) => {
      dispatch({ type: LOAD_FAIL, payload: err });
    });
};
