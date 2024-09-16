import axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const UPDATE_MONSTERS = "UPDATE_MONSTERS"
export const SET_ERROR = "SET_ERROR"

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axios.get('https://api.pokemontcg.io/v1/cards')
        .then(res => {

            console.log(res.data.cards)
            dispatch({ type: UPDATE_MONSTERS, payload: res.data.cards })
        })

        .catch(err => {

            console.error('error fetching data from API. err:', err)
            dispatch({ type: SET_ERROR, payload: 'error fetching data from API' })
        })

}


