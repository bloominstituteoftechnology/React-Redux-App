import axios from 'axios';

export const MISSIONS_START = 'MISSIONS_START';
export const MISSIONS_SUCCESS = 'MISSIONS_SUCCESS';
export const MISSIONS_FAILURE = 'MISSIONS_FAILURE';

// SpaceX APi v.4 does not support a missions endpoint, sp still refers to v.3
// will update content to display "launches", which is supported in the API v.4
export const fetchMissions = () => dispatch => {
  dispatch({ type: MISSIONS_START })
  axios
    .get('https://api.spacexdata.com/v3/missions')
    .then(res => {
      dispatch({ type: MISSIONS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: MISSIONS_FAILURE, payload: err })
    })
}