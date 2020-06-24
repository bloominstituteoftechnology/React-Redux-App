import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getData = () => dispatch => {
  // dispatch({ type: FETCHING_DATA_START });
  axios
  .get('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
  .then(res => {
    console.log(res.data);
    dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('gave back an error', err);
    dispatch({
      type: FETCHING_DATA_FAILURE,
      payload: err
    });
    
  });
};

