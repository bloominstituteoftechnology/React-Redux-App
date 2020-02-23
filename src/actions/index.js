import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
        .get ('https://type.fit/api/quotes')
        .then(res => {
            console.log(res);
        // dispatch({type: UPDATE_QUOTE, payload: res.data});
        })
    .catch(err => {
        console.error('errors fetching data', err);
        // dispatch({type: SET_ERROR, payload: 'error fetching data from api'});
});
};