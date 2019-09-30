import Axios from "axios";

export const FETCH_BREWERIES_START = 'FETCH_BREWERIES_START';
export const FETCH_BREWERIES_SUCCESS = 'FETCH_BREWERIES_SUCCESS'
export const FETCH_BREWERIES_FAILURE = 'FETCH_BREWERIES_FAILURE'

export const getBreweries = () => dispatch => {
  dispatch({type: FETCH_BREWERIES_START});
  Axios.get('https://api.openbrewerydb.org/breweries?by_city=Portland&by_state=Oregon')
    .then( res => {
      console.log(res);
      dispatch({type: FETCH_BREWERIES_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({type: FETCH_BREWERIES_FAILURE, payload: err})
    })  
}