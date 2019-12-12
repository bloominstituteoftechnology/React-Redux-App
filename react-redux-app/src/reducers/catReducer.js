
import {
    FETCH_CAT_START,
    FETCH_CAT_SUCCESS,
    FETCH_CAT_FAILURE
} from '../actions/catActions';

const initialState = {
    cat: null,
    isFetching: false,
    error: ''
}

const catReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_CAT_START:
            // -> FETCH_CAT_SUCCESS or FETCH_CAT_FAILURE
            return {
                ...state,
                isFetching: true
            };
        case FETCH_CAT_SUCCESS:
            return {
                ...state,
                cat: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_CAT_FAILURE:
            return {
                ...state,
                isFetching: false,
                eror: action.payload
            };
        default:
            return state;
    }
}

export default catReducer;