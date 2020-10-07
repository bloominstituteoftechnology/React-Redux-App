import axios from 'axios'

export const FETCH_FACTS = 'FETCH_FACTS'
export const FETCH_FACTS_SUCCESS = 'FETCH_FACTS_SUCCESS'
export const FETCH_FACTS_ERROR = 'FETCH_FACTS_ERROR'

export const fetchFacts = () => {
    return (dispatch) => {
dispatch({ type: FETCH_FACTS })
axios
.get('https://restcountries.eu/rest/v2/region/europe')
.then((response) => {
    console.log(response)
    dispatch({ type: FETCH_FACTS_SUCCESS, payload: response.data })
})
    .catch((error) => {
        console.log(error)
        dispatch({ type: FETCH_FACTS_ERROR,
            payload: { message: "Whoops! Can't get your facts for you!" } })
})
    }
}