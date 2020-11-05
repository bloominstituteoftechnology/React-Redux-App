import axios from 'axios'

export const JOKE_FETCH_START = 'JOKE_FETCH_START'
export const JOKE_FETCH_SUCCESS = 'JOKE_FETCH_SUCCESS'
export const ERROR = 'ERROR'
export const NEXT_JOKE = 'NEXT_JOKE'



export const fetchJokes = () => {

    debugger
  
    return (dispatch) => {
        dispatch ({ type: JOKE_FETCH_START });
        axios.get('https://sv443.net/jokeapi/v2/joke/Christmas')
        .then((res) => {
            console.log('HERE I AM', res.data)
            dispatch({type: JOKE_FETCH_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err.message})
        })

    }
}
