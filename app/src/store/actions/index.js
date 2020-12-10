import axios from 'axios';

export const FETCH_JOKES_START = 'FETCH_JOKES_START';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE';

export const fetchJokes = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_JOKES_START });

        axios
            .get('https://official-joke-api.appspot.com/jokes/ten')
            .then((res) => {
                dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: FETCH_JOKES_FAILURE, payload: err.message });
              });
          };
        };