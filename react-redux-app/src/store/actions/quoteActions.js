import axios from 'axios';
import React, {useState} from "react"
// thunks

// Redux is synchronous
// we need to perform an async operation
export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get(`https://programming-quotes-api.herokuapp.com/quotes/lang/en`)
      .then(res => {
        // console.log("what is this",res.data[Math.floor(Math.random() * (500 - 0)) + 0].en);
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res});
      })
      .catch(err => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error ${err}`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};
