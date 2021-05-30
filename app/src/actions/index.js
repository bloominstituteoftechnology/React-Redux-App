import axios from 'axios';

export const SELECT_SPECIES = "SELECT_SPECIES";
export const GET_SPECIES = "GET_SPECIES";
export const FETCH_SPECIES_START = "FETCH_SPECIES_START";
export const FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS";
export const FETCH_SPECIES_FAILURE = "FETCH_SPECIES_FAILURE";

export const selectSpecies = (selectedSpecies) => {
  console.log("action creator getSpecies is fired")
  return {type: SELECT_SPECIES, payload: selectedSpecies};
}



export const getSpecies = (selectedSpecies) => (dispatch, getState) => {
  console.log("action creator has fired", getState())

  // const selectedSpecies = getState().species;

  // update state to loading
  dispatch ({ type: FETCH_SPECIES_START });

  // begin API request
  axios.get(`http://hotline.whalemuseum.org/api.json?species=${selectedSpecies}`) // plug in state here in ${species}

  // respond to happy path & sad path, updating state with API response
    .then(res => {
        // console.log("res: ", res);
        console.log("res.data.species: ", res.data)
        dispatch({type: FETCH_SPECIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("error: ", err)
        dispatch({ type: FETCH_SPECIES_FAILURE, payload: err });
    })
}
