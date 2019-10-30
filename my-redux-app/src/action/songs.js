import axios from "axios";

export const SONG_NAME = "SONG_NAME";
export const SONG_SUCCESS = "SONG_SUCCESS";
export const SONG_ERROR = "SONG_ERROR";

export const song = () => dispatch => {
        dispatch({ type: SONG_NAME });
        axios
            .get("https://api.lyrics.ovh/v1/artist/title")
            .then(res => {
                dispatch({ type: SONG_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: SONG_ERROR, payload: err.response });
            });
    };

export const addSong = (newSong) => dispatch => {
        axios
            .post("https://api.lyrics.ovh/v1/artist/title", newSong)
            .then((res) => {
                dispatch({ type: SONG_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: SONG_ERROR, payload: err.response });
                console.log('Error:', err);
            })
    }
