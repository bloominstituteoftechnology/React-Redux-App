import axios from "axios";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

export const fetchActivity = () => (dispatch) => {
  axios
    .get("https://api.coinranking.com/v1/public/coins")
    .then((res) => {
      console.log(res.data.data.coins);
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: res.data.data.coins,
      });
    })
    .catch((err) => console.log(err));
};
