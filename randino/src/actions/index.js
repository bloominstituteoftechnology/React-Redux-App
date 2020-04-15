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
        axios.get(proxyurl + url)
        .then(res => {
            const pageID = Object.keys(res.data.query.pages)
            let pageIDString = pageID.toString()
            console.log(res.data.query.pages[pageIDString].extract);
            const info = res.data.query.pages[pageIDString].extract;
            return {
                ...state,
                dinoInfo: info
            }
        })
    }, 1000)
}