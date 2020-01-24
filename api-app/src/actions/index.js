import axios from 'axios'


export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'

export const fetchActivity = () => dispatch => {
        dispatch({type: FETCHING_ACTIVITY_START});
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            console.log(res.data)
            dispatch({type:FETCHING_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err))
    
}