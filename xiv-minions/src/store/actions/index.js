import axios from 'axios';

export const FETCH_MINIONS_START = 'FETCH_MINIONS_START';
export const FETCH_MINIONS_SUCCESS = 'FETCH_MINIONS_SUCCESS';
export const FETCH_MINIONS_FAILURE = 'FETCH_MINIONS_FAILURE';

export const FETCH_SOLOMINION_START = 'FETCH_SOLOMINION_START';
export const FETCH_SOLOMINION_SUCCESS = 'FETCH_SOLOMINION_SUCCESS';
export const FETCH_SOLOMINION_FAILURE = 'FETCH_SOLOMINION_FAILURE';

export const getMinions = () => dispatch => {
    dispatch({ type: FETCH_MINIONS_START });
    axios
        .get('https://xivapi.com/Companion?limit=999')
        .then(res => {
            dispatch({ type: FETCH_MINIONS_SUCCESS, payload: res.data.Results });
        })
        .catch(err => {
            dispatch({ type: FETCH_MINIONS_FAILURE, payload: err.response.Message });
        });
};

export const getSoloMinion = id => dispatch => {
    dispatch({ type: FETCH_SOLOMINION_START });
    axios
        .get(`https://xivapi.com/Companion/${id}`)
        .then(res => {
            dispatch({ type: FETCH_SOLOMINION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SOLOMINION_FAILURE, payload: err.response.Message });
        })
};