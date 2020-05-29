import axios from 'axios';

//API:  https://graphql.anilist.co/api/v2/

export const START = "START";
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const animeApi = data => dispatch => {

    dispatch({type: START});

    axios.post("https://graphql.anilist.co/api/v2/", data)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FAILURE, payload: err.response});
    });
};