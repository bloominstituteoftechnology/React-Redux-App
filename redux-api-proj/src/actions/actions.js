// import axios from "axios";

// export const FETCH_STOCKINFO_START = "FETCH_STOCKINFO_START";
// export const FETCH_STOCKINFO_SUCCESS = "FETCH_STOCKINFO_SUCCESS";
// export const FETCH_STOCKINFO_FAILURE = "FETCH_STOCKINFO_FAILURE";

// export const fetchStockInfo = (url) => (dispatch) => {
//   dispatch({ type: FETCH_STOCKINFO_START });
//   axios
//     .get(url)
//     .then((res) => {
//       dispatch({ type: FETCH_STOCKINFO_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
import axios from "axios";

export const FETCH_STOCKINFO_START = "FETCH_STOCKINFO_START";
export const FETCH_STOCKINFO_SUCCESS = "FETCH_STOCKINFO_SUCCESS";
export const FETCH_STOCKINFO_FAILURE = "FETCH_STOCKINFO_FAILURE";
export const FETCH_STOCKDATE_SUCCESS = "FETCH_STOCKDATE_FAILURE";

export const fetchStockInfo = (url) => (dispatch) => {
  dispatch({ type: FETCH_STOCKINFO_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_STOCKDATE_SUCCESS, payload: res.data });
      dispatch({ type: FETCH_STOCKINFO_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      console.log(err);
    });
};
