import axios from "axios" 
import {connect} from "react-redux"

export const FETCH_POKEMON_START = "FETCH_POKEMONS_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const FETCH_NEXT_SUCCESS = "FETCH_NEXT_SUCCESS";
export const FETCH_NEXT_FAILURE = "FETCH_NEXT_FAILURE";

export const fetchPokemon = (props) => dispatch => {
        dispatch({ type: FETCH_POKEMON_START });
        axios 
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                console.log(res)
                dispatch({
                    type: FETCH_POKEMON_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_POKEMON_FAILURE, payload: err.response})
            })
    
}

export const nextPokemon = (currentURL) => dispatch => {
    console.log("in actions " + currentURL)
    axios
        .get(currentURL)
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_POKEMON_SUCCESS,
                payload: res.data
            })
        })
}

const mapStateToProps = state => {
    return {
        url: state.url
    }
}

export default connect(mapStateToProps, {})(fetchPokemon)