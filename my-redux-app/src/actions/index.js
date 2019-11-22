import axios from "axios";

export const RANDOM_USER_START = "RANDOM_USER_START";
export const RANDOM_USER_SUCCESS = "RANDOM_USER_SUCCESS";
export const RANDOM_USER_FAILURE = "RANDOM_USER_FAILURE";

export const getRandomUserData = () => dispatch => {
  dispatch({ type: RANDOM_USER_START });

  axios
    .get('https://randomuser.me/api/')
    .then(json =>
      dispatch({
        type: RANDOM_USER_SUCCESS,
        payload: json.data.value
      })
    )
    .catch(err =>
      dispatch({
        type: RANDOM_USER_FAILURE,
        payload: err
      })
    ); 
};
