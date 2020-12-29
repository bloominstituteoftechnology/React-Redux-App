import axios from 'axios';

export const HISTORY_START = 'HISTORY_START';
export const HISTORY_SUCCESS = 'HISTORY_SUCCESS';
export const HISTORY_FAILURE = 'HISTORY_FAILURE';

export const fetchHistory = () => dispatch => {
  dispatch({ type: HISTORY_START })
  axios
    .get('https://api.spacexdata.com/v4/history')
    .then(res => {
      dispatch({ type: HISTORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: HISTORY_FAILURE, payload: err })
    })
}