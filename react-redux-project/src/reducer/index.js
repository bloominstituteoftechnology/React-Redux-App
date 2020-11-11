import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS } from "../actions";

const initialState = {
    players: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                error: '',
                /* */
                players: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;