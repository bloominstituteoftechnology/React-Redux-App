import {
    FETCH_MINIONS_START,
    FETCH_MINIONS_SUCCESS,
    FETCH_MINIONS_FAILURE,
    FETCH_SOLOMINION_START,
    FETCH_SOLOMINION_SUCCESS,
    FETCH_SOLOMINION_FAILURE
} from '../actions';

const initialState = {
    minions: null,
    isFetching: false,
    error: '',
    soloMinion: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MINIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MINIONS_SUCCESS:
            return {
                ...state,
                minions: action.payload,
                isFetching: false
            };
        case FETCH_MINIONS_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case FETCH_SOLOMINION_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SOLOMINION_SUCCESS:
            return {
                ...state,
                soloMinion: action.payload,
                isFetching: false
            };
        case FETCH_SOLOMINION_FAILURE:
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