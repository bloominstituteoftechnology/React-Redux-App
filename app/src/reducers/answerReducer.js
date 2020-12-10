
import { FETCHING_ANSWER_START, FETCHING_ANSWER_SUCCESS, FETCHING_ANSWER_FAIL } from "../actions/askAction";

const initialState = {
    answer: '',
    isFetching: false,
    error: ''
};

export const answerReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_ANSWER_START):
            return({
            ...state,
            isFetching: true,
            error: ''
        });
        case(FETCHING_ANSWER_SUCCESS):
            return({
            ...state,
            answer: action.payload,
            isFetching: false,
            });
        case(FETCHING_ANSWER_FAIL):
            return({
            ...state,
            error: action.payload    
            });
            default:
                return state;    
    } 
}