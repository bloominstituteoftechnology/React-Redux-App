import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchPic = () => dispatch => {
    //to show async states use thunk, middleware
        dispatch({type: "START_FETCHING"})
        //do async action and dispatch an error or success action, loading
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => console.log(res))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
    }



const thunk = next => action => store =>{
    //if receive object, will forward
    if (typeof action === 'object'){
        next(action);
    } else if (typeof action === 'function'){
        action(store.dispatch) //stop action and call function above dispacth
    }
}