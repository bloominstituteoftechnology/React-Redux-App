import axios from 'axios';

export const FETCH_CAT_START = 'FETCH_CAT_START'
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE'

export const getCat = () => dispatch => {

    dispatch({ type: 'FETCH_CAT_START' });
    axios
        .get('https://aws.random.cat/meow')
        .then(res => {
            // console.log("from api", res.data.file)
            dispatch({ type: 'FETCH_CAT_SUCCESS', payload: res.data.file });
        })
        .catch(err => {
            dispatch({ type: 'FETCH_CAT_FAILURE', payload: err.response })
        });

};