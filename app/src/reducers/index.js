import {
    FETCH_BEAGLE_START,
    FETCH_BEAGLE_SUCCESS,
    FETCH_BEAGLE_FAIL
} from '../actions';

const initialState = {
    beagles: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_BEAGLE_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_BEAGLE_SUCCESS:
            return {
                ...state,
                beagles: action.payload,
                isLoading: false,
                error: ''
            };
        case FETCH_BEAGLE_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};