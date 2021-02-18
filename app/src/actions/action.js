import axios from 'axios';

export const FETCH_DOG_LOADING ='FETCH_DOG_LOADING';
export const FETCH_DOG_SUCCESS ='FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAIL ='FETCH_DOG_FAIL';

export const getDog = () => {
    return dispatch => {
            dispatch({ type:FETCH_DOG_LOADING});  

        axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            setTimeout(() => {
            dispatch({type:FETCH_DOG_SUCCESS, payload: res.data.message})
        }, 2000);
        })
        .catch(err => {
            dispatch({type:FETCH_DOG_FAIL, payload: err.Response.code})
        })
    }
}

export const fetchDogLoading = () => {
    return({ type: FETCH_DOG_LOADING});
}

export const fetchDogSuccess = (message) => {
    return({ type: FETCH_DOG_SUCCESS, payload: message});
}

export const fetchDogFail = (error) => {
    return({ type:FETCH_DOG_FAIL, payload:error})
}