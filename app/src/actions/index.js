import axios from 'axios'

export const FETCH_GAME = 'FETCH_GAME'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'


export const getGames = () => {
    return (dispatch) => {
        //asyn goes here
        dispatch({ type : FETCH_GAME })

        axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
        .then((res) => {
            dispatch({ type: FETCH_SUCCESS , payload: res.data})
        })
        .catch((err) => {
            dispatch({ type : FETCH_ERROR , payload: err.message })
        })
    };
};