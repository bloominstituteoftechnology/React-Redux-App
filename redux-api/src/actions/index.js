import axios from 'axios';
export const FETCH_CAT = ' FETCH_CAT'
export const FETCH_CAT_SUCCESS = ' FETCH_CAT_SUCCESS'
export const FETCH_CAT_FAILURE = ' FETCH_CAT_FAILURE'

export const ADD_CAT = 'ADD_CAT'
export const ADD_CAT_SUCCESS = 'ADD_CAT_SUCCESS'
export const ADD_CAT_FAILURE= 'ADD_CAT_FAILURE'



export const fetchCats = ()=> {
    const promise = axios.get ('https://api.thecatapi.com/v1/images/search');
    return dispatch => {
        dispatch({type: FETCH_CAT});
        promise 
        .then(res => {
            dispatch({type: FETCH_CAT_SUCCESS, payload: res.data})
        })
        .catch(err=> {
            console.log(err);
            dispatch({type: FETCH_CAT_FAILURE});
        })
    }
}

