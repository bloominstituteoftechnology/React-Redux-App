import axios from 'axios';

export const FETCH_BEAGLE_START = 'FETCH_IMAGE_START';
export const FETCH_BEAGLE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_BEAGLE_FAIL = 'FETCH_IMAGE_FAIL';

export const getBeagle = () => {
    return dispatch => {
        dispatch({ type: FETCH_BEAGLE_START });
        axios
            .get('https://dog.ceo/api/breed/beagle/images/random')
            .then(res => {
                console.log(res.data.message);
                dispatch({ type: FETCH_BEAGLE_SUCCESS, payload: res.data.message })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_BEAGLE_FAIL, payload: err.response })
            });
    };
};