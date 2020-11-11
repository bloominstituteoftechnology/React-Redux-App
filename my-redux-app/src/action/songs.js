import axios from "axios";

export const SONG_NAME = "SONG_NAME";
export const SONG_SUCCESS = "SONG_SUCCESS";
export const SONG_ERROR = "SONG_ERROR";

export const song = (artist, title) => dispatch => {
        dispatch({ type: SONG_NAME });
        axios
            .get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: SONG_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: SONG_ERROR, payload: err.response });
            });
    };