import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchData = () => (dispatch) => {
    dispatch({type : FETCH_DATA});

    axios
    .get("https://rickandmortyapi.com/api/character/1")
    .then((res) => {
        console.log(res);
        dispatch({
            type: FETCH_SUCCESS,
            payload: { img:res.data.image, name:res.data.name }
        })
    })
    .catch((err) => {
        console.log(err);
    })
}