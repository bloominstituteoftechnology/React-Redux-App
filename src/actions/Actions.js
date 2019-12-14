import axios from 'axios';

export const getData = input => dispatch => {
    dispatch({type: 'FETCH'});
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=07U6XHJZDTIBG2MX`)
        .then(response => {
            dispatch({type: 'SUCCESS', payload: response.data});
        })
        .catch(error => {
            dispatch({type: 'ERROR', payload: error});
        });
};