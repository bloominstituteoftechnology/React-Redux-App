import axios from 'axios'

export const GET_QUOTE_START = "GET_QUOTE_START"

// dispatch({type: GET_QUOTE_START })

axios
    .get('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(resp => {
        dispatchEvent({ type: GET_QUOTE_SUCCESS, payload: resp.data})
    .catch((err) => console.log(err))
    })