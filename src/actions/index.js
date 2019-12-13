import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';


export const getQuote = () => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  axios
    .get('https://api.kanye.rest')
    .then(res => {
      console.log('Res Axios: ', res.data.quote);
      //Dispatch on success
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.quote })
    })
    .catch(err => {
      //Dispatch on failure
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response })
    })
}

export const addFavorite = quote => {
  return { type: ADD_FAVORITE, payload: quote }
} 