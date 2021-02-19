import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchData = () => (dispatch) => {
    dispatch({type: FETCH_DATA_START});

    setTimeout(() => {
        axios
        .get(
            'https://ghibliapi.herokuapp.com/Films/0440483e-ca0e-4120-8c50-4c8cd9b965d6/'
        )
        .then((res) => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: {
                    title: res.data.title,
                    description: res.data.descritption,
                    director: res.data.director,
                    release_date: res.data.release_date,
                },
            });
        })
        .catch((err) => {
            dispatch({
                type: FETCH_DATA_FAIL,
                payload: `'error from api, ${err.message}`,
            });
        });
    }, 3000);
};