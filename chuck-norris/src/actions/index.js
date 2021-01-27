import axios from 'axios';

export const GET_JOKE_START = "GET_JOKE_START";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_FAIL = "GET_JOKE_FAIL";

axios.defaults.headers.common['Accept'] = 'application/json'

export const getJoke = () => dispatch => {
    dispatch({ type:GET_JOKE_START});
    axios 
        .get('https://api.chucknorris.io/jokes/random')
        .then((res)=>{
          console.log(res);
          dispatch({ type:GET_JOKE_SUCCESS, payload: res.data.value});
        })
        .catch(err => {
            dispatch({ type:GET_JOKE_FAIL, payload:err});
        });
}
