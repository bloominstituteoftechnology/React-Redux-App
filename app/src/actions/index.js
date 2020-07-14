import axios from 'axios';

export const GET_JOKE_START = "GET_JOKE_START";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_ERROR = "GET_JOKE_ERROR";

export const getJoke = () => dispatch => {
    dispatch({ type: GET_JOKE_START });
    axios.get('https://icanhazdadjoke.com/', { headers: { 'User-Agent': 'Homework Terrible Terrible Homework', 'Accept': 'application/json' } })
        .then((response) => {
            dispatch({ type: GET_JOKE_SUCCESS, payload: response.data })
        })
        .catch((error) => {
            dispatch({ type: GET_JOKE_ERROR, payload: error })
        });
};