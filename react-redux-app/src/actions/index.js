import axios from "axios";

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    })
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then(res => {
        console.log(res)
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: DATA_ERROR, payload: "Error!" })
    })
}