import axios from 'axios';

export const FETCH_DOGGIES_START = 'FETCH_DOGGIES_START';
export const FETCH_DOGGIES_SUCCESS = 'FETCH_DOGGIES_SUCCESS';
export const FETCH_DOGGIES_FAILED = 'FETCH_DOGGIES_FAILED';


export const getDoggies = () => {
    return dispatch => {
        dispatch({ type: FETCH_DOGGIES_START });
        axios.get('https://dog.ceo/api/breeds/image/random/30')
        .then(res => {
            console.log(res.data.message);
            dispatch({ type: FETCH_DOGGIES_SUCCESS, payload: res.data.message })
        })
        .catch(err => {
            console.log('Sorry there was an error', err)
            dispatch({ type: FETCH_DOGGIES_FAILED, payload: err.response })
        })
    }
}