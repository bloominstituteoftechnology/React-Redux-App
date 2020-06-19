import axios from 'axios';

export const GET_JOKE = 'GET_JOKE';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

export const getJoke = () => {
  dispatchEvent({ type: GET_JOKE });
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then(res => {
      dispatchEvent({ type: UPDATE_JOKES, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
    dispatchEvent({ type: GET_CATEGORIES });
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then(res => {
        dispatchEvent({ type: UPDATE_CATEGORIES, payload: res.data });
      })
      .catch(err => console.log(err));
  };