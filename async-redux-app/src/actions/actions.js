import axios from 'axios';

export const getDog = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            dispatch({ type: 'NEW_DOG', payload: response.data.message});
        })
        .catch(error => console.log('ERROR: ', error));
    };
};