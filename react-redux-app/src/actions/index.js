import axios from 'axios';
export const ANIME_LOADING = "ANIME_LOADING";
export const ANIME_SUCCESS = "ANIME_SUCCESS";
export const ANIME_FAIL = "ANIME_FAIL";

export const fetchAnime = () => dispatch => {
  dispatch({ type: ANIME_LOADING })

  axios
  .get('https://api.jikan.moe/v3/anime/1/news')
  .then(response => dispatch({ type: ANIME_SUCCESS, payload: response.data.articles }))
  .catch(error => dispatch({ type: ANIME_FAIL, payload: error.response}))
}
