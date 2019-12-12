import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacter = () => dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });
    axios
    .get("https://www.moogleapi.com/api/v1/characters/random")
    .then(res => {
        dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch ({ type: FETCH_CHARACTER_FAILURE, payload: err.response });
    });
};