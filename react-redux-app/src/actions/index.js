import axios from 'axios';

export const FETCH_POKEMON_LOADING = "FETCH_POKEMON_LOADING";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILED = "FETCH_POKEMON_FAILED";

export const fetchPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_LOADING});
  axios
  .get('https://pokeapi.co/api/v2/pokemon')
  .then(res => {
    dispatch({type: FETCH_POKEMON_SUCCESS, payload: res.data} )
  })
  .catch(err => {
    dispatch({type: FETCH_POKEMON_FAILED, payload: err.response })
  })

}

   