import { FETCHING_DOGS_START, FETCH_DOGS_SUCCESS, FETCH_DOGS_ERROR } from '../actions/actionIndex';

export const initialState = {
    dogs: [],
    isFetching: false,
    error: ''
};

export const pupReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_DOGS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DOGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dogs: action.payload,
                error: ''
            }
        default:
            return state;
    }

}