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
      dispatch({ type: FETCHING_BOOK_SUCCESS, payload: res.data.info_url});
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_BOOK_FAILUR,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};



// mycallback({"ISBN:0451526538": {"bib_key": "ISBN:0451526538", "preview": "noview", "thumbnail_url": "https://covers.openlibrary.org/b/id/295577-S.jpg", 
// "preview_url": "https://openlibrary.org/books/OL1017798M/The_adventures_of_Tom_Sawyer", "info_url": "https://openlibrary.org/books/OL1017798M/The_adventures_of_Tom_Sawyer"}});