import axios from "axios";

export const FETCHING_CARD_START = "FETCHING_CARD_START";
export const FETCHING_CARD_SUCCESS = "FETCHING_CARD_SUCCESS";
export const FETCHING_CARD_FAIL = "FETCHING_CARD_FAIL";


export const getCard = () => dispatch => {
    dispatch({type: FETCHING_CARD_START});
    axios
        .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => {
            console.log(res.data.cards[0].image)
            dispatch({type: FETCHING_CARD_SUCCESS, payload: res.data.cards[0].image});
        })
        .catch(err => {
            dispatch({type: FETCHING_CARD_FAIL, payload: err});
        })
}