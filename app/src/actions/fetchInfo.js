import axios from 'axios';

export const INFO_START = 'INFO_START';
export const INFO_SUCCESS = 'INFO_SUCCESS';
export const INFO_FAILURE = 'INFO_FAILURE';

export const fetchInfo = () => dispatch => {
  dispatch({ type: INFO_START })
  axios
    .get('https://api.spacexdata.com/v4/company')
    .then(res => {
      dispatch({ type: INFO_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: INFO_FAILURE, payload: err })
    })
}

