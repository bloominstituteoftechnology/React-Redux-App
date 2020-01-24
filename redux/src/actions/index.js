import {useState} from 'react';
import axios from 'axios';


export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const fetchActivity = () => dispatch => {
  

  dispatch({ type: FETCHING_ACTIVITY_START });
  
  axios
    .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&camera=RHAZ&api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4")
    .then(res => {
      //res.data ==> activity
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};