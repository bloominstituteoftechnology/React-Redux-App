import axios from 'axios';

export const INIT_FETCH = 'INIT_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getImage = () => (dispatch) => {
    dispatch({ type: INIT_FETCH });

    axios
        .get(
            'https://api.unsplash.com/photos/random?client_id=Chfv7BCyU8OOn0_H8z1MsY9QEo4bTV08gh6I0SjZdfo'
        )
        .then((res) => {
            console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch((err) => dispatch({ type: FETCH_FAIL, payload: err.message }));
};
