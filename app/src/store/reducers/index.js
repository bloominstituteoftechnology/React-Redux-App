import {
    FETCH_JOKES_START,
    FETCH_JOKES_SUCCESS,
    FETCH_JOKES_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    jokesData: [],
    error: ''
};

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_JOKES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jokesData: action.payload
            };
        case FETCH_JOKES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    };
};