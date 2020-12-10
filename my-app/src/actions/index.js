import axios from 'axios';

export const FETCH_DOG_START = 'FETCH_DOG_STARTS';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';

export const fetchDog = searchQuery => dispatch => {

    dispatch({ type: FETCH_DOG_START });

    axios
        .get(`https://dog.ceo/api/breed/${searchQuery}/images`)
        .then(response => {
            dispatch({ type: FETCH_DOG_SUCCESS, payload: response.data.message });
        })
        .catch(error => {
            dispatch({ type: FETCH_DOG_ERROR, payload: error })
        });
};