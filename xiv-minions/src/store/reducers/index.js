import {
    FETCH_MINIONS_START,
    FETCH_MINIONS_SUCCESS,
    FETCH_MINIONS_FAILURE
} from '../actions';

const initialState = {
    minions: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MINIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MINIONS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                minions: action.payload,
                isFetching: false
            };
        case FETCH_MINIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;