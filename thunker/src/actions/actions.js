import axios from "axios" 

export const FETCH_POKEMON_START = "FETCH_POKEMONS_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";


export const fetchPokemon = () => dispatch => {
        dispatch({ type: FETCH_POKEMON_START });
        axios 
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                console.log(res)
                dispatch({
                    type: FETCH_POKEMON_SUCCESS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_POKEMON_FAILURE, payload: err.response})
            })
    
}