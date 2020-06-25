import axios from "axios";

export const FETCHING_PERSON_START = "FETCHING_PERSON_START";
export const FETCHING_PERSON_SUCCESS = "FETCHING_PERSON_SUCCESS";
export const FETCHING_PERSON_FAILURE = "FETCHING_PERSON_FAILURE";

export const getPerson = () => dispatch => {
  dispatch({ type: FETCHING_PERSON_START });

  axios
    .get("https://randomuser.me/api/")
    .then(results => {
      dispatch({
		  type: FETCHING_PERSON_SUCCESS,
		  payload: results.data.results[0]
		})
    })
    .catch(error => {
      dispatch({
        type: FETCHING_PERSON_FAILURE,
        payload: `${error.response.message} with response code ${error.response.code}`
      });
    });
};
