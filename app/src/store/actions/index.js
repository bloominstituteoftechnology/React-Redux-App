import axios from 'axios';

export const FETCH_TEAMS_START = "FETCH_TEAMS_START";
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE";

// ACTION CREATORS
export const fetchTeams = () => {
  return dispatch => {
    // 1st - dipsatch an isLoading action
    dispatch({ type: FETCH_TEAMS_START });
    // 2nd - do the async operation
    axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then(res => {
        // res.data
        dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_TEAMS_FAILURE, payload: err.message });
      });
  };
};
