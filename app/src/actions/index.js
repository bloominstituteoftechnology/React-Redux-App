import axios from 'axios';

export const CLEAR_ERROR = "CLEAR_ERROR";
export const FETCH_FILM = "FETCH_FILM";
export const FILM_RECIEVED = "FILM_RECIEVED";
export const FETCH_FAILED = "FETCH_FAILED";

export const getFilms = () => (dispatch) => {
    dispatch({type: CLEAR_ERROR});
    dispatch({type: FETCH_FILM});
    console.log("Get axios now");
    axios.get(`https://ghibliapi.herokuapp.com/films`)
    .then(res => {
        console.log(res.data);
        dispatch({type: FILM_RECIEVED, payload: res.data})
    }).catch(err => {
        console.log(err);
        dispatch({type: FETCH_FAILED, payload: err.message});
    })
}