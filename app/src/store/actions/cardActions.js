import axios from "axios";

export const FETCHING_CARDS_START = "FETCHING_CARDS_START";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";

export const fetchCards = () => (dispatch) => {
  dispatch({ type: FETCHING_CARDS_START });

  axios
    .get("https://api.magicthegathering.io/v1/cards?page=1&pageSize=6")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards });
    })
    .catch((err) => console.log(err));
};

export const fetchNewCards = (currentPage) => (dispatch) => {
  dispatch({ type: FETCHING_CARDS_START });

  axios
    .get(
      `https://api.magicthegathering.io/v1/cards?page=${
        currentPage + 1
      }&pageSize=10`
    )
    .then((res) => {
      console.log("SV: cardActions: fetchNewCards: response", res);
      dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards });
    })
    .catch((err) => console.log(" SV: cardActions: fetchNewCards: error", err));
};

export const searchNewCard = (searchTerm) => (dispatch) => {
  dispatch({ type: FETCHING_CARDS_START });

  axios
    .get(`https://api.magicthegathering.io/v1/cards?name=${searchTerm}`)
    .then((res) => {
      console.log("SV: cardActions: searchNewCards: response", res);
      dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards });
    })
    .catch((err) =>
      console.log(" SV: cardActions: searchNewCards: error", err)
    );
};