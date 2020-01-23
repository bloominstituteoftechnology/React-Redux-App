import axios from 'axios';


export const FETCHING_FACT_START = 'FETCHING_FACT_START';
export const FETCHING_FACT_SUCCESS = 'FETCHING_FACT_SUCCESS';
export const FETCHING_FACT_FAILURE = 'FETCHING_FACT_FAILURE';

export const fetchFact = () => dispatch => {
dispatch({ type: FETCHING_FACT_START });
    axios
        .get('https://catfact.ninja/fact?max_length=140')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_FACT_SUCCESS, payload: res.data});
        })
        .catch(err=> {
            dispatch({ type: FETCHING_FACT_FAILURE, payload: err.response})
        })
}