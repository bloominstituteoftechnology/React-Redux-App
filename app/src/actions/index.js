import axios from 'axios';

export const SET_FORM_STATE = 'SET_FORM_STATE';
export const FETCH_LYRICS_START = 'FETCH_LYRICS_START';
export const FETCH_LYRICS_SUCCESS = 'FETCH_LYRICS_SUCCESS';
export const FETCH_LYRICS_FAIL = 'FETCH_LYRICS_FAIL';

export const getLyrics = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LYRICS_START });
    axios
      .get('https://api.lyrics.ovh/v1/Michael-Jackson/Thriller')
      .then((resp) => {
        console.log(resp);
        dispatch({ type: FETCH_LYRICS_SUCCESS, payload: resp.data.lyrics });
      })
      .catch((err) => {
        dispatch({ type: FETCH_LYRICS_FAIL, payload: err });
      });
  };
};
