<<<<<<< HEAD
import axios from "axios";

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE";

export const fetchPokemon = name => dispatch => {
    dispatch({ type: "FETCHING_POKEMON_START" });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            console.log(res, "api response");
            dispatch({ type: "FETCHING_POKEMON_SUCCESS", payload: res.data });
=======
import axios from 'axios';


export const FETCHING_GEMINI_START = "FETCHING_GEMINI_START";
export const FETCHING_GEMINI_SUCCESS = "FETCHING_GEMINI_SUCCESS";
export const FETCHING_GEMINI_FAILURE = "FETCHING_GEMINI_FAILURE";



export const fetchGemini = name => dispatch => {
    dispatch({ TYPE: "FETCHING_GEMINI_START" });
    axios
        .get('https://api.sandbox.gemini.com')
        .then(response => {
            console.log("api response", response);
            dispatch({ type: "FETCHING_GEMINI_SUCESS" })
>>>>>>> 796ddc0eda8adfba8ef29ac64552223190ebe626
        })
        .catch(err => {
            dispatch({ type: "FETCHING_POKEMON_FAILURE", payload: err });
        });
};