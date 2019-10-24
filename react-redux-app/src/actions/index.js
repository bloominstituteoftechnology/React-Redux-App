import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchRoster = () => dispatch => {
    console.log('fetching');
    dispatch({ type: START_FETCHING })
    axios.get(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='133'`)
      .then(res => {
        console.log(res.data.roster_40.queryResults.row)
        dispatch({ type: FETCH_SUCCESS, payload: res.data.roster_40.queryResults.row })
      })
      .catch(err => {
        console.log('Error', err)
        dispatch({ type: FETCH_FAILURE, payload: err.response })
      })
};