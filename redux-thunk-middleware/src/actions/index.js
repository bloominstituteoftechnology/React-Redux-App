import axios from 'axios';

export const FETCH_FACT_START = "FETCH_FACT_START";
export const FETCH_FACT_SUCCESS = "FETCH_FACT_SUCCESS";
export const FETCH_FACT_FAIL = "FETCH_FACT_FAIL";

export const getFact = () => dispatch => {
    dispatch({ type:"FETCH_FACT_START" });
    axios
        .get("https://uselessfacts.jsph.pl/random.json")
        .then((res) => {
            console.log(res);
            dispatch({ type:"FETCH_FACT_SUCCESS", payload: res.data.text})
        })
        .catch(err => {
            dispatch({ type:"FETCH_FACT_FAIL", payload:"YOU SUCK"})
        })
}