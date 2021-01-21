import axios from 'axios'

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAIL= 'FETCH_CHARACTER_FAIL';

export const getCharacter = () => dispatch =>{
    dispatch({type: FETCH_CHARACTER_START})
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then((resp) => {
        dispatch({type:FETCH_CHARACTER_SUCCESS, payload: resp.data.results})
    })
    .catch((err) => {
        dispatch({type:FETCH_CHARACTER_FAIL, payload: err})
    })
}