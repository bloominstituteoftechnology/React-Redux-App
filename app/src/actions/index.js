import axios from 'axios';

export const SELECT_SPECIES = "SELECT_SPECIES";
export const GET_SPECIES = "GET_SPECIES";
export const FETCH_SPECIES_START = "FETCH_SPECIES_START";
export const FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS";
export const FETCH_SPECIES_FAILURE = "FETCH_SPECIES_FAILURE";

export const selectSpecies = (newSpecies) => {
  return {type: SELECT_SPECIES, payload: newSpecies};
}


export const getSpecies = (dispatch) => {
  // update state to loading
  dispatch({ type: FETCH_SPECIES_START });

  // begin API request
  axios.get('http://hotline.whalemuseum.org/api.json?species=gray%20whale')
  // axios.get(`http://hotline.whalemuseum.org/api.json?species=${species}`) // plug in state here in ${species}

  // respond to happy path & sad path, updating state with API response
    .then(res => {
        console.log("res: ", res);
        dispatch({type: FETCH_SPECIES_SUCCESS, payload: res.data.species })
    })
    .catch(err => {
        console.log("error: ", err)
        dispatch({ type: FETCH_SPECIES_FAILURE, payload: err });
    })
}
