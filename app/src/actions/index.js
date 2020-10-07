// import axios
import axios from 'axios';
//set up action objects

// fetchComic
export const FETCH_COMIC_START = "FETCH_COMIC_START";
export const FETCH_COMIC_SUCCESS = "FETCH_COMIC_SUCCESS";

export const fetchComic = (url) => (dispatch) => {
    dispatch({ type: FETCH_COMIC_START});
    axios.get(url)
        .then((res) => {
            //send data to success
            dispatch({type: FETCH_COMIC_SUCCESS, payload: res.data});
        })
        .catch((err) => console.log("ERROR: ", err))
};