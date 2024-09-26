import { FETCHING_DOG_START, FETCHING_DOG_SUCCESS } from "../reducers/index";
import axios from "axios";

export const getDog = () => (dispatch) => {
  dispatch({ type: FETCHING_DOG_START });

  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      dispatch({ type: FETCHING_DOG_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err);
    })
};