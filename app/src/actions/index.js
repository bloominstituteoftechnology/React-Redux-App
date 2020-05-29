import axios from 'axios';

//API:  https://graphql.anilist.co/api/v2/

export const START = "START";
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const animeApi = data => dispatch => {

    dispatch({type: START});

    axios
    .post(`https://api.jikan.moe/v3/anime/1`, data)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FAILURE, payload: err.response});
    });
};