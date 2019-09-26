import axios from 'axios';

export const FETCHING_PRICE_START = "FETCHING_PRICE_START"
export const FETCHING_PRICE_SUCCESS = "FETCHING_PRICE_SUCCESS"
export const FETCHING_PRICE_FAILURE = "FETCHING_PRICE_FAILURE"

export const getPrice = () => dispatch => {
  dispatch({ type: FETCHING_PRICE_START })
  axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCHING_PRICE_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}