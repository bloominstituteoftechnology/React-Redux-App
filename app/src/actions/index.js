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
        })
        .catch(err => {
            dispatch({ type: "FETCHING_POKEMON_FAILURE", payload: err });
        });
};