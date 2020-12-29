import axios from 'axios';

export const ROCKETS_START = 'ROCKETS_START';
export const ROCKETS_SUCCESS = 'ROCKETS_SUCCESS';
export const ROCKETS_FAILURE = 'ROCKETS_FAILURE';

export const fetchRockets = () => dispatch => {
  dispatch({ type: ROCKETS_START })
  axios
    .get('https://api.spacexdata.com/v4/rockets')
    .then(res => {
      dispatch({ type: ROCKETS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ROCKETS_FAILURE, payload: err })
    })
}