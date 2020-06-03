import axios from 'axios';

export const FETCHING_BREWERY_START = 'FETCHING_BREWERY_START';
export const FETCHING_BREWERY_SUCCESS = 'FETCHING_BREWERY_SUCCESS';
export const FETCHING_BREWERY_FAILURE = 'FETCHING_BREWERY_FAILURE';



export const getBrewery = (url) => dispatch => {
    dispatch({ type: FETCHING_BREWERY_START });
    axios
    .get(url)
    .then(res => {
        dispatch({ type: FETCHING_BREWERY_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCHING_BREWERY_FAILURE, paylod: err.message })
    })
}