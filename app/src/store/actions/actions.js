import axios from 'axios'
export const GET_QUOTE_START = "GET_QUOTE_START"
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS"

export const fetchQuote = () => (dispatch) => {

    
        dispatch({ type: GET_QUOTE_START})

        axios.get('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then((resp) => {
            dispatch({type: GET_QUOTE_SUCCESS, payload: resp.data})
            console.log('AXIOS', resp.data)
        })
        .catch((err) => console.log(err))
    
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'object') {
        next(action)
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}
 