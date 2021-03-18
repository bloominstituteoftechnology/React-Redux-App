import axios from 'axios';
export const IS_LOADING = "IS_LOADING";
export const SUCCESS_FETCH = "SUCCESS_FETCH";
export const IS_ERROR = "IS_ERROR";


export const starTraction = () => dispatch => {
    dispatch({type: IS_LOADING });
    axios
    .get("https://www.boredapi.com/api/activity/")
    .then(response => {
            
            dispatch({ type: SUCCESS_FETCH, payload: response.data});
            console.log("this is the response.data" + response.data);
        })
    .catch(error => {
            console.log(error);
            dispatch({type: IS_ERROR, payload:"Don't worry. Error is:" + error});
        });
    };