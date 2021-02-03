import { CLEAR_ERROR, FETCH_FILM } from '../actions';

const intitialState = {
    film: null,
    isFetching: false,
    error: "Error"
};

export const reducer = (state = intitialState, action) => {
    switch(action.type) {
        case CLEAR_ERROR: {
            return {
                ...state, error: ''
            }
        }
        case FETCH_FILM: {
            return {
                ...state, isFetching: true, error: ''
            };
        }
        default:
            return state;
    };
};