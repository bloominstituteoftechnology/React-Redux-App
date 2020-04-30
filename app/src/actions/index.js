import axios from "axios";

export const FETCHING_BOOK_START = "FETCHING_BOOK_START";
export const FETCHING_BOOK_SUCCESS = "FETCHING_BOOK_SUCCESS";
export const FETCHING_BOOK_FAILURE = "FETCHING_BOOK_FAILURE";

export const getBook = () => dispatch => {
  dispatch({ type: FETCHING_BOOK_START });

  axios
    .get("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback")
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_BOOK_SUCCESS, payload: res.data.text });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_BOOK_FAILUR,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};
