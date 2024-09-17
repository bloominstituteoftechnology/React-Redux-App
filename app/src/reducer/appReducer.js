import {
    FETCH_CARS_START,
    FETCH_CARS_SUCCESS,
    FETCH_CARS_FAIL
} from '../action/index';


const initialState = {
    vehicle: [],
    error: '',
    isFetching: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                vehicle: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_CARS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default: return state;
    }
}