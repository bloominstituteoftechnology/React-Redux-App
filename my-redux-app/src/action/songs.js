import axios from "axios";

export const FETCH_SONG_START = "FETCH_SONG_START";
export const FETCH_SONG_SUCCESS = "FETCH_SONG_SUCCESS";
export const FETCH_SONG_ERROR = "FETCH_SONG_ERROR";

export function fetchSong() {
    return dispatch => {
        dispatch({ type: FETCH_SONG_START });

        axios
            .get("")
            .then(res => {
                // enter the "success" state
                dispatch({ type: FETCH_SONG_SUCCESS, payload: res.data.message });
            })
            .catch(err => {
                // enter the "error" state
                dispatch({ type: FETCH_SONG_ERROR, payload: err });
            });
    };
}