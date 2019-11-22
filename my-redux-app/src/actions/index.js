import axios from "axios";

export const RANDOM_QUOTE_START = "RANDOM_QUOTE_START";
export const RANDOM_QUOTE_SUCCESS = "RANDOM_QUOTE_SUCCESS";
export const RANDOM_QUOTE_FAILURE = "RANDOM_QUOTE_FAILURE";

export const getRandomUserData = () => dispatch => {
  dispatch({ type: RANDOM_QUOTE_START });

  axios
    .get('https://api.kanye.rest')
    .then(res =>
      dispatch({
        type: RANDOM_QUOTE_SUCCESS,
        payload: res.data.quote
      })
    )
    .catch(err =>
      dispatch({
        type: RANDOM_QUOTE_FAILURE,
        payload: err
      })
    ); 
};
