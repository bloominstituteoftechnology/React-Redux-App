import axios from 'axios';
import { LOADING_ERROR, FETCH_DATA, UPDATE_COUNTRY, TOGGLE_MOBILE } from './types';

export const fetchData = () => async dispatch => {
    // Fetch covid data
    try {
        const resCovidData = await axios.get('https://api.covid19api.com/summary');
        const resNewsData = await axios.get('https://newsapi.org/v2/top-headlines?country=us&q=corona&apiKey=a283966851f24fc991d479ec659e8893');
        dispatch({
            type: FETCH_DATA,
            payload: {
                data: resCovidData.data,
                news: resNewsData.data.articles
            }
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
        const url = `https://newsapi.org/v2/everything?q=+${country.Country}&apiKey=a283966851f24fc991d479ec659e8893`;

        const res = await axios.get(url);

        dispatch({
            type: UPDATE_COUNTRY,
            payload: {
                countryData: country,
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

export const toggleMobile = () => dispatch => {
    dispatch({
        type: TOGGLE_MOBILE
    })
}