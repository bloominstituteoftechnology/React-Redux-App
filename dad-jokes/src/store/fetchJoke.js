import axios from 'axios';

export const fetchJoke = () => {
    return dispatch =>{
        dispatch({type: 'FETCH_JOKE_START'})
        axios
        .get('https://icanhazdadjoke.com/', { headers: { "Accept": "application/json" } })
        .then(res=>{
            dispatch({type: 'FETCH_JOKE_SUCCESS', payload: res.data.joke})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type: 'FETCH_JOKE_ERROR', payload: err})
        })
    }
}