import axios from 'axios'

export const FETCHING_CARD_START = 'FETCHING_CARD_START'
export const FETCHING_CARD_SUCCESS = 'FETCHING_CARD_SUCCESS'
export const FETCHING_CARD_FAILURE = 'FETCHING_CARD_FAILURE'

export const getCards = () => {
    return (dispatch => {

    axios
        .get('https://api.magicthegathering.io/v1/cards?')
        .then(res => {
            dispatch({type: FETCHING_CARD_SUCCESS, payload: res.data.cards})
            console.log(res.data)
        })
        .catch(err => {
            dispatch({type:FETCHING_CARD_FAILURE, payload: err.res})
            }, [])
    })
}

// const setFetchStart = (name) => {
//     return({type:FETCHING_CARD_START})
// }

// const setFetchSuccess = (name) => {
//     return({type:FETCHING_CARD_SUCCESS})
// }

// const setFetchFailure = (name) => {
//     return({type:FETCHING_CARD_FAILURE})
// }