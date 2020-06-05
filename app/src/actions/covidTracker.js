import axios from 'axios';
import { LOADING_ERROR, FETCH_DATA, UPDATE_COUNTRY, TOGGLE_MOBILE, FETCH_TOP_HEADLINES } from './types';

export const fetchData = () => async dispatch => {
    // Fetch covid data
    try {
        const resCovidData = await axios.get('https://api.covid19api.com/summary');
        // const resNewsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&q=corona&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        dispatch({
            type: FETCH_DATA,
            payload: {
                data: resCovidData.data,
                // news: resNewsData.data.articles
            }
        })
    } catch(err) {
        dispatch({
            type: LOADING_ERROR,
            payload: `Error fetching data: ${err.message}`
        })
    }
}

export const fetchTopHeadlines = () => async dispatch => {
    try {
        // const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&q=corona&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);

        dispatch({
            type: FETCH_TOP_HEADLINES,
            payload: [] // res.data.articles
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
        // const url = `https://newsapi.org/v2/everything?q=+${country.Country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

        // const res = await axios.get(url);

        dispatch({
            type: UPDATE_COUNTRY,
            payload: {
                countryData: country,
                news: [] // res.data.articles
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