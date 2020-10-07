import axios from "axios";

export const FETCH_STOCKINFO_START = "FETCH_STOCKINFO_START";
export const FETCH_STOCKINFO_SUCCESS = "FETCH_STOCKINFO_SUCCESS";
export const FETCH_STOCKINFO_FAILURE = "FETCH_STOCKINFO_FAILURE";

export const fetchStockInfo = (url) => (dispatch) => {
  dispatch({ type: FETCH_STOCKINFO_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_STOCKINFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&interval=5min&apikey=ZZERN3GSXZ5E1U0M

// .then((res) => {
//   dispatch({ type: FETCH_STOCKINFO_SUCCESS, payload: res.data });
// })

// .then((res) => console.log(res.data))
