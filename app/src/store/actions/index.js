import axios from 'axios'

// api endpoint
const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

// action types
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL'

// action creator (async)
export const fetchPokemon = () => {
    return (dispatch) => {
        dispatch({type: FETCH_POKEMON_START})
        axios
        .get(pokemonAPI)
        .then(res => {
            console.log(res.data)
            console.log(res.data.results)
            dispatch({type: FETCH_POKEMON_SUCCESS, payload:res.data.results})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_POKEMON_FAIL, payload: err.message})
        })
    }
}