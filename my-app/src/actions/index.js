// import axios from 'axios';

// export const START_FETCHING = 'START_FETCHING';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAILURE ='FETCH_FAILURE';

// export const fetchCoinData = () => dispatch => {

//     dispatch({ type: START_FETCHING });

//     axios
//      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
//      .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
//      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
// }

// https://api.coingecko.com/api/v3/exchanges/{id}/volume_chart