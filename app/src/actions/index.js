import axios from 'axios';


export const START = "START";
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const animeApi = data => dispatch => {

    dispatch({type: START});

    axios
    .get(`https://ghibliapi.herokuapp.com/films`)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FAILURE, payload: err.response});
    });
};