import axios from 'axios';
export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHED_DATA = 'FETCHED_DATA';
export const FETCHED_ERROR = 'FETCHED_ERROR';

export const getData = () => dispatch => {
    dispatch({type: FETCHING_DATA_START });
    axios
    .get('https://opentdb.com/api.php?amount=1')
    .then(res => {
        
        console.log(res);
        dispatch({type: FETCHED_DATA, payload:res.data.results[0]});
        
    })
    .catch(err => {
        
        console.log(err)  
        dispatch({ type: FETCHED_ERROR, payload: err })
    
    });
}