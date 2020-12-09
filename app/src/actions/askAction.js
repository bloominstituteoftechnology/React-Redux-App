import axios from 'axios';



export const getAnswer = () => dispatch => {
    dispatch({type:FETCHING_ANSWER_START});
}

