import axios from 'axios';

export const setEditTrue = () => {
    return { type: 'EDITING'};
};

export const setEditFalse = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: 'DONE_EDITING'});
        }, 50);
    };
};

export const getDog = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            console.log("response.data.message = ", response.data.message)
            dispatch({ type: 'NEW_DOG', payload: response.data.message});
        })
        .catch(error => console.log('ERROR: ', error));
    };
};