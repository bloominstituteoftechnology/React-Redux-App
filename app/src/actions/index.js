import axios from 'axios';

export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";



export const getDogImg = () => dispatch => {
    dispatch({type: FETCH_DOG_START});
    axios
    .get("https://dog.ceo/api/breeds/image/random"
        )
    .then((res) => {
        const dogImg = res.data.message
        dispatch({ type: FETCH_DOG_SUCCESS, payload: dogImg});
        console.log(dogImg)
    })
        .catch(err => {
            dispatch({ type: FETCH_DOG_FAIL, payload:"Your doggie is on his way(soon)"})
            console.log(err)
        })
    }

