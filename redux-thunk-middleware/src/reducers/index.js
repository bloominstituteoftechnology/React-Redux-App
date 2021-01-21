import {FETCH_FACT_START, FETCH_FACT_SUCCESS, FETCH_FACT_FAIL} from './../actions'

const initialState = {
    fact: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_FACT_START):
            return({
                ...state,
                fact:'',
                isFetching: true,
                error: ''
            })
        case(FETCH_FACT_SUCCESS):
            return({
                ...state,
                fact:action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FACT_FAIL):
            return({
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}