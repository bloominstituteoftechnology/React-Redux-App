import axios from 'axios';

export const fetchCases = () => {
    return dispatch => {
        dispatch({type: 'FETCH_CASES_START'})
        axios.get('https://covid.mathdro.id/api')
        .then (res=>{
            dispatch({type: 'FETCH_CASES_SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err))
    }
}