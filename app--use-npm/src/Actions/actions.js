import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';


// Now is when you get to use thunk. Here, you will use thunk to dispatch the actions.
export const getCharacters = () =>{
  return dispatch => {
    dispatch({
        type: FETCH_CHARACTERS_START
        //Here we are telling our app that we are going into a fetching state
    });

    axios
    .get("https://www.potterapi.com/v1/characters?key=$2a$10$viL1vqiysuXsxx4vUsTzb.LdGyEtE8WpRbKz8Mea6NxnLLPlT4ZPC")
    .then( res => 
        {
        dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
        }
    )
    .catch(err =>{ 
        console.log(err);
        dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err });
    });
}}