import axios from 'axios';

//API:  https://graphql.anilist.co/api/v2/

const animeApi = data => dispatch => {

    axios.post("https://graphql.anilist.co/api/v2/", data)
    .then(res => {
        dispatch({type: CALL_SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: CALL_FAILURE, payload: err.response});
    });
};