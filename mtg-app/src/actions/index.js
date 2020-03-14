import axios from "axios";

export const FETCH_BOOSTER_START = "FETCH_BOOSTER_START";
export const BOOSTER_OPEN = "BOOSTER_OPEN";
export const FETCH_BOOSTER_FAILURE = "FETCH_BOOSTER_FAILURE";

export const getBooster = set => dispatch => {
  dispatch({ type: FETCH_BOOSTER_START });
  axios
    .get(`https://api.magicthegathering.io/v1/sets/${set}/booster`)
    .then(res => {
      console.log(res.data.cards);
      dispatch({
        type: BOOSTER_OPEN,
        payload: res.data.cards.map(a => a.imageUrl)
      });
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({
        type: FETCH_BOOSTER_FAILURE,
        payload: err.response
      });
    });
};
