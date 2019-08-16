import axios from "axios";

export const GET_DATA = 'GET_DATA';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';



export const getData = () => dispatch => {
    dispatch({type: GET_DATA});
    axios.get('https://api.lyrics.ovh/v1/Rise_Against/Savior')
    .then(response => {
        console.log(response.data)
        dispatch({type: SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: FAIL, payload:error.response})
    })
}