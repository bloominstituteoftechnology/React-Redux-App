export const FETCH_JOBS_START = "FETCH_JOBS_START";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAIL = "FETCH_JOBS_FAIL";

export const getJobs = () => dispatch => {
  dispatch({ type: FETCH_JOBS_START });
  fetch(`https://jobs.github.com/positions.json?page=1`)
    .then( res => res.json())
    .then( data => {
      console.log(data);
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    })
    .catch( err => dispatch({ type: FETCH_JOBS_FAIL, payload: err }))
}
