import axios from 'axios';

export const FETCHING_XKCD_START = 'FETCHING_XKCD_START';
export const FETCHING_XKCD_SUCCESS = 'FETCHING_XKCD_SUCCESS';
export const FETCHING_XKCD_FAILURE = 'FETCHING_XKCD_FAILURE';

export const getXkcd = () => dispatch => {
  // dispatch({ type: FETCHING_XKCD_START });
  axios
  .get('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
  .then(res => {
    console.log(res.data);
    dispatch({ type: FETCHING_XKCD_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('gave back an error', err);
    dispatch({
      type: FETCHING_XKCD_FAILURE,
      payload: err
    });
    
  });
};

