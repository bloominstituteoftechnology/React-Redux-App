import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const fetchJoke = (
  firstName = 'Chuck',
  lastName = 'Norris'
) => dispatch => {
  dispatch({ type: FETCH_JOKE_START });
  // fetch joke
  axios
    .get(`//api.icndb.com/jokes/random?exclude=[explicit]`)
    .then(res => {
      dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.value.joke });
    })
    .catch(err => console.log(err.response));
};
