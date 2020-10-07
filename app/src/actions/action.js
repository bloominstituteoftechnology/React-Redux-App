import axios from "axios";

export const FETCH_CHARS = "FETCH_CHARS";
export const CHAR_FETCH_SUCCESS = "CHAR_FETCH_SUCCESS";
export const CHAR_FETCH_ERROR = "CHAR_FETCH_ERROR";



export const fetchChars = () => {
    const promise = axios.get(`https://rickandmortyapi.com/api/character/`);
    return dispatch => {
      dispatch({ type: FETCH_CHARS }); // first state of 'fetching' is dispatched
      promise
        .then(response => {
          dispatch({ type: CHAR_FETCH_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: CHAR_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };