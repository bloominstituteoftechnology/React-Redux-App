import axios from 'axios';

export const getLaunches = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_LAUNCHES_START' });
        axios.get('https://api.spacexdata.com/v3/launches?sort=flight_number&launch_success=true&order=desc&limit=10')
        .then(res => {
            console.log(res.data)
            dispatch({ type: 'FETCH_LAUNCHES_SUCCESS', payload: res.data })
        })
        .catch(err => console.log(err));
    }
}