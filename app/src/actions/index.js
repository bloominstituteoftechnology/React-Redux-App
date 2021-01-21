import axios from 'axios';

export const FETCH_API_START = 'FETCH_API_START';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_FAIL = 'FETCH_API_FAIL';

export const getCharacters = () => (dispatch) =>{
    dispatch({type: FETCH_API_START});
    axios.get('https://swapi.dev/api/people/')
    .then((res) =>{
        dispatch({ type: FETCH_API_SUCCESS, payload:res.data.results});
        // console.log(res.data);
    })
    .catch((err) =>{
        dispatch({ type: FETCH_API_FAIL, payload: err.response});
    });
}

