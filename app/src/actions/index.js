import axios from 'axios'

//action types
export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

// action creators (async)
export const fetchQuote = () => {
    return dispatch => {
    // do async action here
    dispatch({ type: FETCH_QUOTE_START });

    axios.get("https://api.kanye.rest/")
        .then(res => {
            dispatch({type: FETCH_QUOTE_SUCCESS, payload: res.data.quote });
    })
        .catch(err => console.log(err.response));

    };
};
