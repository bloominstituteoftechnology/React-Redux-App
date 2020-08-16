import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export function toggleEditing() {
  return { type: "TOGGLE_EDITING" };
}

export const updateTitle = newTitle => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get("https://api.kanye.rest/", { headers })
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: err.response.message
      });
    });
};
