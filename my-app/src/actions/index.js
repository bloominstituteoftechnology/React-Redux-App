import axios from "axios";

export const FETCH_ANIMES = "FETCH_ANIMES";
export const UPDATE_ANIMES = "UPDATE_ANIMES";
export const SET_ERROR = "SET_ERROR";
export const getAnimeData = () => dispatch => {
  dispatch({ type: FETCH_ANIMES });
  axios
    .get("https://api.jikan.moe/v3/season/2018/winter")
    .then(res => {
      // console.log(res.data.anime);
      dispatch({ type: UPDATE_ANIMES, payload: res.data.anime });
    })
    .catch(err => {
      console.error("error fetching data from anime API, err:", err);
      dispatch({ type: SET_ERROR, paylaod: "Error fetching data from API" });
    });
};