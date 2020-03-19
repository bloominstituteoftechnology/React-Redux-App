import axios from 'axios';
import { LOADING_ERROR, FETCH_COVID_DATA, UPDATE_COUNTRY } from './types';

export const fetchData = () => async dispatch => {
    // Fetch covid data
    try {
        const res = await axios.get('https://api.covid19api.com/summary');
        dispatch({
            type: FETCH_COVID_DATA,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: LOADING_ERROR,
            payload: `Error fetching data: ${err.message}`
        })
    }
}

export const fetchNewsData = () => async dispatch => {
   // fetch news data
   try {
        const url = 
            'http://newsapi.org/v2/top-headlines?' +
            // 'q="corona virus"&' +
            'q="+brazil"&' +
            'apiKey=a283966851f24fc991d479ec659e8893';
        const req = Request(url);
        console.log('Request url ' + req);
        const res = await axios.get(req);

        console.log('response: ' + res.data);

        dispatch({
            type: FETCH_COVID_DATA,
            payload: res.data.artitles
        })
    } catch(err) {
        dispatch({
            type: LOADING_ERROR,
            payload: `Error fetching data: ${err.message}`
        })
    }
}

export const selectCountry = (country) => async dispatch => {
    try {
        const url = 
            `http://newsapi.org/v2/top-headlines?q=+${country.Country}&apiKey=a283966851f24fc991d479ec659e8893`;

        const res = await axios.get(url);

        dispatch({
            type: UPDATE_COUNTRY,
            payload: {
                data: country,
                news: res.data.articles
            }
        })
    } catch(err) {
        dispatch({
            type: LOADING_ERROR,
            payload: `Error fetching data: ${err.message}`
        })
    }
    

}