import axios from 'axios';

export const FETCH_BREWERIES_DATA_START = 'FETCH_BREWERIES_DATA_START';
export const FETCH_BREWERIES_DATA_SUCCESS = 'FETCH_BREWERIES_DATA_SUCCESS';
export const FETCH_BREWERIES_DATA_FAILURE = 'FETCH_BREWERIES_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_BREWERIES_DATA_START });
    axios
      .get('https://api.openbrewerydb.org/breweries?by_state=virginia')
      .then(results => {
        console.log(results);
        dispatch({ type: FETCH_BREWERIES_DATA_SUCCESS, payload: results.data });
      })
      .catch(error => {
          console.error('error fetching data from api', error);
        dispatch({
          type: FETCH_BREWERIES_DATA_FAILURE,
          payload: error.response,
        });
      });
  };
};