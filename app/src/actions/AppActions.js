import axios from "axios";


export const FETCHING_ADVICE_START = "FETCHING_ADVICE_START";
export const FETCHING_ADVICE_SUCCESS = "FETCHING_ADVICE_SUCCESS";
export const FETCHING_ADVICE_FAILURE = "FETCHING_ADVICE_FAILURE";


export const getAdvice = () => dispatch => {
    dispatch({ type: FETCHING_ADVICE_START });
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        dispatch({ type: FETCHING_ADVICE_SUCCESS, payload: res.data.slip.advice });
        console.log("The advice",res.data.slip.advice);
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ADVICE_FAILURE,
          payload: err
        });
        console.log(err);
      });
  };
  
