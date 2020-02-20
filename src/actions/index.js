import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_MISSIONS = "UPDATE_MISSIONS";
export const SET_ERROR = 'SET_ERROR';
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
    .get("https://quote-garden.herokuapp.com/quotes/random")
    .then(res => 
        console.log(res))
    .catch(err => console.log("error", err))
    }
        // dispatch({ type: UPDATE_MISSIONS, payload: res.data });
    
    // .catch(err => {
    //     console.error('error fetching data from API', err);
    //     dispatch({ type: SET_ERROR, payload: 'Error fetching data from API' })
    // });

