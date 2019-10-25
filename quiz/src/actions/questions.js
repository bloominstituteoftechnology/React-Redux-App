import axios from "axios";
export const FETCH_QUESTIONS_START = "FETCH_QUESTIONS_START";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILED = "FETCH_QUESTIONS_FAILED";

export function fetchQuestions() {
  return dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START });

    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean"
      )
      .then(res => {
        console.log("res", res);
        dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: FETCH_QUESTIONS_FAILED, payload: err });
      });
  };
}
