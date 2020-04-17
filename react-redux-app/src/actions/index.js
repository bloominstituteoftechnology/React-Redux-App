import axios from "axios";

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";
export const CHANGE_DATA = "CHANGE_DATA";
export const FETCH_DETAILS = "FETCH_DETAILS";

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(res => {
        console.log('FETCH DATA SUCCESS')
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DATA_ERROR, payload: "Error!" })
    })
}

export const changeData = (index) => ({
    type: CHANGE_DATA,
    payload: index
})

export const fetchDetails = (name) => dispatch => {
    dispatch({
        type: FETCH_DATA
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(res => {
        console.log('FETCH DETAILS SUCCESS')
        dispatch({ type: FETCH_DETAILS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DATA_ERROR, payload: "Error!" })
    })
}