import axios from "axios"
import { FETCHING_ADVICE_FAILURE, FETCHING_ADVICE_START, FETCHING_ADVICE_SUCCESS } from "../reducers/AppReducers";


export const getAdvice = () => (dispatch) => {
    dispatch({type: FETCHING_ADVICE_START});
    axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
            dispatch({ type:FETCHING_ADVICE_SUCCESS, payload: res.data}), 
            console.log(res.data.advice);
        })   
        .catch((err) => {
            dispatch({
                type: FETCHING_ADVICE_FAILURE,
                payload: err.response.message
            });
            console.log(err)
        });
};