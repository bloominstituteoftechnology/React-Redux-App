import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CATS = "UPDATE_CATS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  const searchValue = dispatch({ type: FETCH_DATA });
  axios
    .get(
      `https://pixabay.com/api/?key=16954247-b3d29ac9ac8ba57afa0aacc2e&q=${searchValue}&per_page=25`
    )
    .then((result) => {
      console.log(result);
      dispatch({ type: UPDATE_CATS, payload: result.hits });
    })

    .catch((error) => {
      console.error("error fetching data from API.err: ", error);

      dispatch({ type: SET_ERROR, payload: "error fetching data" });
    });
};
