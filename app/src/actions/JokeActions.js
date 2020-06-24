import axios from 'axios'

const headers = {
    Accept: 'Application/json'
}

export const getJoke = () => dispatch => {
    dispatch({type: 'START_FETCHING'});
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming', {headers})
    .then(res => {
        dispatch({ type: 'SUCCESSFUL_FETCH', payload: res.data.joke})
    })
    .catch(err => {
        console.log('opps something went wrong')
    })
}