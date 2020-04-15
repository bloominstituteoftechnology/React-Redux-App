import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchFacts = () => dispatch => {
  
  dispatch({ type: START_FETCHING });
  console.log("Starting to load");
  
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts'
    )
    .then(res => {
      console.log("data:",res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data.all })})
    .catch(err =>{ 
      console.log("error:", err.message)
      dispatch({ type: FETCH_FAILURE, payload: err.message })});
};