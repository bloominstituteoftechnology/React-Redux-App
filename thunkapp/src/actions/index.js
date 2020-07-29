import axios from 'axios'

export const FETCH_PICS_START = 'FETCH_PICS_START'
export const FETCH_PICS_SUCCESS = 'FETCH_PICS_SUCCESS'
export const FETCH_PICS_FAIL = 'FETCH_PICS_FAIL'

export const getPics = () => dispatch => {
    // console.log('actionsuccuss')
    dispatch({type:FETCH_PICS_START});
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(resp=>{
            console.log('resp-axioscall',resp.data)
            dispatch({ type: FETCH_PICS_SUCCESS, payload:resp.data.message})
        })
        .catch(err => {
            dispatch({ type: FETCH_PICS_FAIL, payload:err})
        })
} 