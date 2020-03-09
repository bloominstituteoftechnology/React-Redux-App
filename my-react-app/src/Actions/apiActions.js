import axios from 'axios';

export const FETCH_STATUS_START = 'FETCH_ADVICE_START';
export const FETCH_STATUS_SUCCESS = 'FETCH_ADVICE_SUCCESS';
export const FETCH_STATUS_FAILURE = 'FETCH_STATUS_FAILURE';


export const getSTATUS = () => dispatch => {
    dispatch({ type: FETCH_STATUS_START});
    axios
        .get('https://http.cat/[status_code]')
        .then(res => {
            console.log(res.data.slip)
            dispatch({type: FETCH_STATUS_SUCCESS, payload: res.data.slip.status})
        })
        .catch(err => {
            dispatch({ type: FETCH_STATUS_FAILURE, payload: err.response});
        });
}