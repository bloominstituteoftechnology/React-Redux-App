import axios from 'axios';
import { LOADING_ERROR, FETCH_DATA } from './types';

export const fetchData = () => async dispatch => {
    try {
        const res = await axios.get('https://api.covid19api.com/summary');
        console.log(res);
        dispatch({
            type: FETCH_DATA,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: LOADING_ERROR,
            payload: `Error fetching data: ${err.message}`
        })
    }
}