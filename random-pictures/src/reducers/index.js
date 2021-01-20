import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAIL,
} from "./../actions";

const initialState = {
    images: [],
    isFetching: false,
    error: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                images: [action.payload, ...state.images],
                isFetching: false,
                error: null,
            };
        case FETCH_QUOTE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
