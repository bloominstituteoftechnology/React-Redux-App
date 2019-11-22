import axios from "axios";

export const RANDOM_USER_START = "RANDOM_USER_START";
export const RANDOM_USER_SUCCESS = "RANDOM_USER_SUCCESS";
export const RANDOM_USER_FAILURE = "RANDOM_USER_FAILURE";

export const getRandomUserData = () => dispatch => {
  dispatch({ type: RANDOM_USER_START });

  axios
    .get('https://api.kanye.rest')
    .then(res =>
      dispatch({
        type: RANDOM_USER_SUCCESS,
        payload: res.data.quote
      })
    )
    .catch(err =>
      dispatch({
        type: RANDOM_USER_FAILURE,
        payload: err
      })
    ); 
};
