import axios from "axios";

export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";


export const loadData = (date) => (dispatch) => {
    dispatch({type: IS_LOADING })


    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    axios
    .get(apiURL, {headers: {"X-Requested-With": "XMLHttpRequest"}} )
    .then((res) =>{
        console.log(
            res
          );
        dispatch({
            type: DATA_LOAD_SUCCESS, 
            payload: res.data })
    })
    .catch((err) => {
        dispatch({type: DATA_LOAD_ERROR,
        payload: 'erorr fetching data' })
    })



}