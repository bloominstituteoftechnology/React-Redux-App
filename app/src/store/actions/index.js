import axios from 'axios';
import moment from 'moment';

// Action types
export const FETCH_ROVERS_START = 'FETCH_ROVERS_START';
export const FETCH_ROVERS_SUCCESS = 'FETCH_ROVERS_SUCCESS';

// Action creators (async)
export const fetchRovers = () => {
    return (dispatch) => {
        // Do async actions here
        dispatch({ type: FETCH_ROVERS_START })

        const date = moment().subtract(1, 'days').format('YYYY-MM-DD')
        // Fetch Data
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=PeK7QWsdhQ8I7XRxcgjWXFJTbf5kPV0UgpYco21O`)
        .then((res) => {
            console.log(res.data.photos);
            dispatch({ type: FETCH_ROVERS_SUCCESS, payload: res.data.photos})
        })
        .catch((err) => {
            console.log(err);
        })
    }
}