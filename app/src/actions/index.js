import axios from 'axios'

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL'

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log(res.data.results)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
        })
        .catch(err => dispatch({ type: FETCH_CHARACTERS_FAIL, payload: err }))
}