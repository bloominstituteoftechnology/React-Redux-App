import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions'

const initialState = {
    isLoading: false,
    apiData: [],
    error: ''
};

export const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiData: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state      
    }
};