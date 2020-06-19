import axios from 'axios';

export const GET_JOKE = 'GET_JOKE';
export const UPDATE_JOKE = 'UPDATE_JOKES';
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH';

export const getJoke = () => (dispatch) => {
  dispatch({ type: GET_JOKE });
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then(res => {
      console.log(res.data.value);
      dispatch({ type: UPDATE_JOKE, payload: res.data.value });
    })
    .catch(err => console.log(err));
};

export const getSearchResults = (search) => (dispatch) =>  {
  dispatch({ type: GET_SEARCH_RESULTS, payload: search });
  axios
    .get(`https://api.chucknorris.io/jokes/search?query=${search}`)
    .then(res => {
      dispatch({ type: UPDATE_SEARCH_RESULTS, payload: res.data.result });
    })
    .catch(err => console.log(err));
};
