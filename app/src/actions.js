import axios from "axios";

export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_FAILURE = "FETCH_DOG_FAILURE";

export const FetchDog = () => (dispatch) => {
  dispatch({ type: FETCH_DOG_START });
  axios.get('https://dog.ceo/api/breed/labrador/images/random')
    
    .then((res) => {
      dispatch({ type: FETCH_DOG_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};