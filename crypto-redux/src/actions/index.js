import axios from 'axios';

export const FETCHING_PRICE_START = "FETCHING_PRICE_START";
export const FETCHING_PRICE_SUCCESS = "FETCHING_PRICE_SUCCESS";
export const FETCHING_PRICE_FAILURE = "FETCHING_PRICE_FAILURE";
export const FETCHING_MARKETCAP_START = "FETCHING_MARKETCAP_START"
export const FETCHING_MARKETCAP_SUCCESS = "FETCHING_MARKETCAP_SUCCESS"
export const FETCHING_MARKETCAP_FAILURE = "FETCHING_MARKETCAP_FAILURE"

export const getPrice = () => dispatch => {
  dispatch({ type: FETCHING_PRICE_START })
  axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCHING_PRICE_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const getMarketCap = () => dispatch => {
  dispatch({ type: FETCHING_MARKETCAP_START })
  axios.get('https://api.coinpaprika.com/v1/global')
    .then(res => {
      console.log(res.data)
      dispatch({type: FETCHING_MARKETCAP_SUCCESS, payload: res.data})
    })
}
