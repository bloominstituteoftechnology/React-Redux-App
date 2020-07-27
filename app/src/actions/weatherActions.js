import axios from 'axios';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';
export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';

export const fetchWeather = () => dispatch => {
    dispatch({ type: FETCH_WEATHER_START });
    axios({
            url: 'http://127.0.0.1:3001/weather',
            method: 'GET',
        })
        .then(resp => {
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: resp.data });
        })
        .catch(err => dispatch({ type: FETCH_WEATHER_FAIL, payload: err }))
};