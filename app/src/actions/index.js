import axios from 'axios';




export const GET_DATA = 'GET_DATA';
export const UPDATE_DATA ='UPDATE_DATA'

export const getData = () => dispatch => {
    dispatch({type: GET_DATA});
    axios
        .get('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_DATA, payload: res.data.Countries});

        })
        .catch(err => console.log(err))
}