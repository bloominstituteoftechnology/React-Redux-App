import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchData = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
    .get("https://api.sportsdata.io/v3/mlb/scores/json/AllTeams", {
        "method": "GET",
        "headers": 	{	
            "Ocp-Apim-Subscription-Key": "8b6b2979daf04317a5c067a795998b5f"
            }
        })
    .then (res => {
        console.log(res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch (err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response})
    })
}