import { FETCHING_FACT_START, FETCHING_FACT_SUCCESS, FETCHING_FACT_FAILURE } from '../actions/Actions';

const initialState = {
    loading: false,
    error: "",
    fact: "",
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FACT_START:
            return { 
                ...state,
                loading: true
            };
        case FETCHING_FACT_SUCCESS:
            return {
                ...state,
                loading: false,
                fact: action.payload
            }
        case FETCHING_FACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}