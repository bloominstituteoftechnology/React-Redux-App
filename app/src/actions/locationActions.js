export const FETCH_LOCATION = 'FETCH_LOCATION';

export const fetchLocation = () => dispatch => {
    dispatch({ type: FETCH_LOCATION });
};