import axios from 'axios';

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';
export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';

export const fetchWeather = () => dispatch => {
    dispatch({ type: FETCH_WEATHER_START });
    axios
        .get('https://www.metaweather.com/api/location/2487956/')
        .then(resp => {
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: resp.data });
        })
        .catch(err => dispatch({ type: FETCH_WEATHER_FAIL, payload: err }))
};