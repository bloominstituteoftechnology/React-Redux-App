import axios from 'axios';
import ranDino from '../dinoRandomizer';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";



export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    setTimeout(() => {

    }, 1000)
}