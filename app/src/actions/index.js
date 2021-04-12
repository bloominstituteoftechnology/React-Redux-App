import axios from 'axios'
//https://restcountries.eu/rest/v2/region/{region}
//https://restcountries.eu/rest/v2/region/americas

/// action suite (not industry term)
//1. action types
// 2. action creators
// 3. action objects

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS =  "FETCH_SUCCESS"
export const FETCH_FAILURE =  "FETCH_FAILURE"

export const fetchCountry = () => (dispatch) =>{
    dispatch({ type: FETCH_START });
    axios
    .get('https://restcountries.eu/rest/v2/region/americas')
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err, 'fetched failed!')
        dispatch({ type: FETCH_FAILURE, payload: err})
    })


}

// changeable input to switch api call region
// store dropdown input in state, create different dispatch calls
// if statement on useeffect dependency array based on when state changes
