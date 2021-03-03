import axios from 'axios'

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START'
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS'
export const FETCHING_AUTHOR_SUCCESS = 'FETCHING_AUTHOR_SUCCESS'
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE'


const headers = {
  Accept: 'application/json'
}


export const getQuote = () => (dispatch) => {
  dispatch({ type: FETCHING_QUOTE_START })

  axios.get('https://api.quotable.io/random', {headers})
  .then(res => {
    dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.content})
    dispatch({ type: FETCHING_AUTHOR_SUCCESS, payload: res.data.author})
  })

  .catch(err => {
    dispatch({ type: FETCHING_QUOTE_FAILURE, payload: err })
  })
}
