import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get("https://api.pokemontcg.io/v1/cards")
        .then(response => {
            dispatch({ type: UPDATE_DATA, payload: response.data.cards})
        })
        .catch(err => {
            console.error("Error: ", err)
            dispatch({ type: SET_ERROR, payload: `Error: ${err}`  })
    })
}  