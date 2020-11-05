import axios from 'axios'

// api endpoint
const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'

// action types
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL'

export const DISPLAY_POKE_START = 'DISPLAY_POKE_START'
export const DISPLAY_POKE_SUCCESS = 'DISPLAY_POKE_SUCCESS'
export const DISPLAY_POKE_FAIL = 'DISPLAY_POKE_FAIL'

// action creator (async)
export const fetchPokemon = () => {
    return (dispatch) => {
        dispatch({type: FETCH_POKEMON_START})
        axios
        .get(pokemonAPI)
        .then(res => {
            dispatch({type: FETCH_POKEMON_SUCCESS, payload:res.data.results})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_POKEMON_FAIL, payload: err.message})
        })
    }
}

export const displayPokemon = (api) => {
    return (dispatch) => {
        // dispatch({type:DISPLAY_POKE_START})
        axios.get(api)
        .then(res => {
            // console.log(res.data)
            dispatch({type:DISPLAY_POKE_SUCCESS, payload:res.data})
        })
        .catch(err => 
            {console.log(err)
        })
    }
}