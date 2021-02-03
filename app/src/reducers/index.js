import { CLEAR_ERROR, FETCH_FILM, FILM_RECIEVED, FETCH_FAILED } from '../actions';

const intitialState = {
    films: null,
    isFetching: false,
    error: ""
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
        case FILM_RECIEVED: {
            return {
                ...state,
                films: action.payload,
                isFetching: false
            }
        }
        case FETCH_FAILED: {
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        }
        default:
            return state;
    };
};