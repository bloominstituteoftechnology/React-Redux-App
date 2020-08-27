import axios from 'axios';
export const FETCHING_POKEMON='FETCHING_POKEMON';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAIL='FETCH_FAIL';
export const TOGGLE_EVOL_LINE='TOGGLE_EVOL_LINE';

export const toggler=()=>{
    return{type:TOGGLE_EVOL_LINE};
}

function getPoke(dispatch){
    dispatch({type: FETCHING_POKEMON});
    axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res)=>{
            dispatch({type:FETCH_SUCCESS, payload:res.data.results})
            console.log(res.data)
        })
        .catch((err)=>{dispatch({
            type:FETCH_FAIL,
            payload:err

        })})
    
}

export default getPoke
