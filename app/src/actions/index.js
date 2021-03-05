import axios from "axios";

export const FETCHING_IMAGE_START = "FETCHING_IMAGE_START";
export const FETCHING_IMAGE_SUCCESS = "FETCHING_IMAGE_SUCCESS";
export const FETCHING_IMAGE_FAILURE = "FETCHING_IMAGE_FAILURE";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getImage = () => (dispatch) => {
    dispatch({type: FETCHING_IMAGE_START});

    axios.get('https://api.taylor.rest/image', {headers})
        .then(res => {
            dispatch({type: FETCHING_IMAGE_SUCCESS, payload: res.data.url})
        })
        .catch(err => {
            dispatch({type: FETCHING_IMAGE_FAILURE, payload: err})
        });

}

export const getQuote = () => (dispatch) => {
    dispatch({type: FETCHING_QUOTE_START});

    axios.get('https://api.taylor.rest/', {headers})
        .then(res => {
            dispatch({type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote})
        })
        .catch(err => {
            dispatch({type: FETCHING_QUOTE_FAILURE, payload: err})
        });

}