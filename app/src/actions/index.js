
import axios from 'axios';

export const FETCHING_GAME_START = 'FETCHING_GAME_START';
export const FETCHING_GAME_SUCCESS = 'FETCHING_GAME_SUCCESS';
export const FETCHING_GAME_FAIL = 'FETCHING_GAME_FAIL';

export const getGames = () => {
    return (dispatch => {
        dispatch({type:FETCHING_GAME_START});
        axios
        .get('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=20')
        .then((res)=>{
            console.log('-------',res.data)
            dispatch({type:FETCHING_GAME_SUCCESS, payload: res.data})
        })
        .catch((err)=>{
            dispatch({type:FETCHING_GAME_FAIL, payload: err.response.message})
        })
    })
} 