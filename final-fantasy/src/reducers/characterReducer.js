import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE} from '../actions';

const initialState = {
    character: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                character: action.payload,
                isFetching: false,
                err: ''
            };
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            };
        default:
            return state
    }
}

export default reducer