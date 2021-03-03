import axios from 'axios'

export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
export const FETCH_START = "FETCH_START"
export const FETCH_ERROR = "FETCH_ERROR"

export const getCharacters = (dispatch) => {
    dispatch({type: FETCH_START})
}