import axios from 'axios';

export const CLEAR_ERROR = "CLEAR_ERROR";
export const FETCH_FILM = "FETCH_FILM";

export const getFilms = () => (dispatch) => {
    dispatch({type: CLEAR_ERROR});
    dispatch({type: FETCH_FILM});
    console.log("Get axios now");
    axios.get(`https://ghibliapi.herokuapp.com/films`)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}