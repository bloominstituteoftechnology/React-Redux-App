import axios from 'axios'

export const FETCH_PICS_START = 'FETCH_PICS_START'
export const FETCH_PICS_SUCCESS = 'FETCH_PICS_SUCCESS'
export const FETCH_PICS_FAIL = 'FETCH_PICS_FAIL'

export const getPics = () => dispatch => {
    dispatch({type:FETCH_PICS_START});
    axios.get('https://picsum.photos/200')
        .then(resp=>{
            dispatch({ type: FETCH_PICS_SUCCESS, payload:resp})
        })
        .catch(err => {
            dispatch({ type: FETCH_PICS_FAIL, payload:err})
        })
} 