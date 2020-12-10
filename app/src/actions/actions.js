import axios from 'axios'

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getFact = () => dispatch => {
    
    console.log(dispatch)
    dispatch({type: START_FETCH})
    axios.get('https://cat-fact.herokuapp.com/facts/random')
    .then((res) => {
        console.log(res)
        dispatch({type:FETCH_SUCCESS})
    })
    .catch((err) => {
        console.log(err)
    })

}