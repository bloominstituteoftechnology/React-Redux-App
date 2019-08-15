import axios from 'axios';

export const HARVARD_DATA_START = 'HARVARD_DATA_START'
export const HARVARD_DATA_SUCCESS = 'HARVARD_DATA_SUCCESS'
export const HARVARD_DATA_FAILURE = 'HARVARD_DATA_FAILURE'

export const getData = () => {
    return dispatch => {
      dispatch({ type: HARVARD_DATA_START });
      axios
        .get('https://api.harvardartmuseums.org/object?person=28810&apikey=7063a2f0-bf8e-11e9-adec-bbc79eda807d')
        .then(res => {
          // res.data.data
          console.log(res);
          dispatch({ type: HARVARD_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: HARVARD_DATA_FAILURE, payload: err.response });
        });
    };
  };