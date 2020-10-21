import axios from 'axios';

export const FETCH_POKEMON_START='FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS='FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE='FETCH_POKEMON_FAILURE';
export const FETCH_DETAILS_SUCCESS='FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAILURE='FETCH_DETAILS_FAILURE';


export const getPokemon=()=>(dispatch)=>{
    dispatch({type:FETCH_POKEMON_START})
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${Math.floor(Math.random()*151)}`)
        .then(res=>dispatch({type: FETCH_POKEMON_SUCCESS,payload:res.data.results},
            res.data.results.map(poke=>
                axios.get(`${poke.url}`)
                .then(res=>dispatch({type:FETCH_DETAILS_SUCCESS, payload:res.data}))
                .catch(err=>dispatch({type:FETCH_DETAILS_FAILURE,payload:`${err.response.status} ${err.response.data}`})
                ))))
        .catch(err=>dispatch({type: FETCH_POKEMON_FAILURE,payload:`${err.response.status} ${err.response.data}`}))

}
