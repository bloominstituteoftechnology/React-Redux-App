import axios from "axios";

const FETCH_ANIME_REQUEST = 'FETCH_ANIME_REQUEST';
const FETCH_ANIME_SUCCESS = 'FETCH_ANIME_SUCCESS';
const FETCH_ANIME_FAILURE = 'FETCH_ANIME_FAILURE';

const fetchAnimeRequest = () => {
    return {
        type: FETCH_ANIME_REQUEST
    }
}

const fetchAnimeSuccess = anime => {
    return {
        type: FETCH_ANIME_SUCCESS,
        payload: anime
    }
}

const fetchAnimeFailure = err => {
    return {
        type: FETCH_ANIME_FAILURE,
        payload: err
    }
}

export const fetchAnime = () => {
    return function(dispatch) {
    //   dispatch(fetchAnimeRequest())
      axios.get('https://ghibliapi.herokuapp.com/films')
      .then (res => {
          console.log(res);
          const anime = res.data;
          dispatch({type: FETCH_ANIME_SUCCESS, payload: anime})
      })
      .catch(err => {
          console.log('Error Fetching API', err)
      })
    }
}

