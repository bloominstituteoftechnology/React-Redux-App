import axios from 'axios'

//action types
export const FETCH_GOT_DATA = "FETCH_GOT_DATA";
export const FETCH_GOT_SUCCESS = "FETCH_GOT_SUCCESS";
export const FETCH_GOT_FAILURE = "FETCH_GOT_FAILURE";

// action creators (async)
export const getGameOfThronesData = () => {
    return (dispatch) => {
    // do async action here
    dispatch({ type: FETCH_GOT_DATA });

    axios
        .get("https://anapioficeandfire.com/api/characters/583")
        .then((res) => {
            dispatch({ FETCH_GOT_SUCCESS, payload: res.data });
    })
        .catch((err) => {
            dispatch({ type: FETCH_GOT_FAILURE, payload: err.message })
        });
    };
};
