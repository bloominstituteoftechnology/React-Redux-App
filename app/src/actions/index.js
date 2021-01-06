import axios from "axios";

export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_FAILURE = "FETCH_DOG_FAILURE";

export const getDog = () => (dispatch) => {
  dispatch({ type: FETCH_DOG_START });

  axios
    .get("https://dog.ceo/api/breed/shiba/images")
    .then((res) => {
      console.log(res);

      dispatch({ type: FETCH_DOG_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: FETCH_DOG_FAILURE,
        payload: `${err.response.message} with response code ${err.response.code}`,
      });
    });


 
};