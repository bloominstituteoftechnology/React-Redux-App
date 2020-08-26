import { FETCHING_DOG_START, FETCHING_DOG_SUCCESS, FETCHING_DOG_FAILURE } from "../reducers/index";
import axios from "axios";

export const getDog = () => (dispatch) => {
  dispatch({ type: FETCHING_DOG_START });

  axios
    .get("https://dog.ceo/api/breeds")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
};