import axios from "axios";

export const FETCHING_DECK_START = "FETCHING_DECK_START";
export const FETCHING_DECK_SUCCESS = "FETCHING_DECK_SUCCESS";
export const FETCHING_DECK_FAIL = "FETCHING_DECK_FAIL";

export const getDeck = () => dispatch => {
    dispatch({type: FETCHING_DECK_START});
    axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCHING_DECK_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: FETCHING_DECK_FAIL, payload: err});
        })
}

export const DEALING_CARDS_START = "DEALING_CARDS_START";
export const DEALING_CARDS_SUCCESS = "DEALING_CARDS_SUCCESS";
export const DEALING_CARDS_FAIL = "DEALING_CARDS_FAIL";

export const dealCards = (deckID) => dispatch => {
    dispatch({type: DEALING_CARDS_START});
    axios
        .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=4`)
        .then(res => {
            console.log(res.data.cards);
            dispatch({type: DEALING_CARDS_SUCCESS, payload: res.data.cards})
        })
        .catch(err => {
            dispatch({type: DEALING_CARDS_FAIL, payload: err});
        })
}


export const FETCHING_PLAYER_CARD_START = "FETCHING_PLAYER_CARD_START";
export const FETCHING_PLAYER_CARD_SUCCESS = "FETCHING_PLAYER_CARD_SUCCESS";
export const FETCHING_PLAYER_CARD_FAIL = "FETCHING_PLAYER_CARD_FAIL";

export const getPlayerCard = (deckID) => dispatch => {
    dispatch({type: FETCHING_PLAYER_CARD_START});
    axios
        .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        .then(res => {
            console.log(res)
            dispatch({type: FETCHING_PLAYER_CARD_SUCCESS, payload: res.data.cards});
        })
        .catch(err => {
            dispatch({type: FETCHING_PLAYER_CARD_FAIL, payload: err});
        })
}
