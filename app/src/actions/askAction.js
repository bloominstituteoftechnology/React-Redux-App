import axios from 'axios';

export const FETCHING_ANSWER_START = "FETCHING_ANSWER_START";
export const FETCHING_ANSWER_SUCCESS = "FETCHING_ANSWER_SUCCESS";
export const FETCHING_ANSWER_FAIL = "FETCHING_ANSWER_FAIL";

export const getAnswer = () => dispatch => {


    dispatch({type:FETCHING_ANSWER_START});

axios
    .get('https://yesno.wtf/api')
    .then(res => {
        console.log(res)
        dispatch({type:FETCHING_ANSWER_SUCCESS, payload:res.data.answer});
    })
    .catch(err => {
        dispatch({type:FETCHING_ANSWER_FAIL, payload: err.response.message})
    });
};


const setFetchStart = (name) => {
    return({type:FETCHING_ANSWER_START});
}
const setFetchSuccess = (name) => {
    return({type:FETCHING_ANSWER_SUCCESS});
}
const setFetchFail = (name) => {
    return({type:FETCHING_ANSWER_FAIL});
}



