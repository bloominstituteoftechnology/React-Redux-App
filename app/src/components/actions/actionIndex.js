import axios from 'axios';

export const FETCHING_DOGS_START = 'FETCHING_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';

export const fetchDogPictures = () => dispatch => {
    dispatch({ type: FETCHING_DOGS_START });
    axios.get('https://dog.ceo/api/breed/terrier/images/random/16')
        .then(res => {
            console.log('from actions: FDS success', res)
            dispatch({ type: FETCH_DOGS_SUCCESS, payload: res.data.message })
        })
        .catch(err => {
            console.log('from actions: FDS error', err)
            dispatch({ type: FETCH_DOGS_ERROR, payload: err })
        })
}