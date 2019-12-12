import axios from 'axios';

export const getData = input => dispatch => {
    dispatch({type: 'FETCH'});
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
        .then(response => {
            // dispatch({type: 'SUCCESS', payload: response});
            console.log(response);
        })
        .catch(error => {
            // dispatch({type: 'ERROR', payload: error});
            console.log(error);
        });
};