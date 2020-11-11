import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';


export const FETCH_NAME_START= 'FETCH_NAME_START';
export const FETCH_NAME_SUCCESS= 'FETCH_NAME_SUCCESS';
export const FETCH_NAME_FAILURE= 'FETCH_NAME_FAILURE';

export const getName= () => dispatch => {
    dispatch({ type: FETCH_NAME_START});

    axios
        .get('https://uinames.com/api/?region=japan')
        .then(respose => {
            dispatch({type: FETCH_NAME_SUCCESS, payload: respose.data})
        })
        .catch(error => {
            dispatch({ type: FETCH_NAME_FAILURE, payload: error.respose})
        });
};