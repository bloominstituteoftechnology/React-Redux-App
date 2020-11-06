import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS } from '../actions/index'

const initialState = {
    isLoading: false,
    quote: '',
    error: ""
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                isLoading: false,
                quote: action.payload,
                error: action.payload
            };
        default:
            return state;
    }
};
