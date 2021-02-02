import { INIT_FETCH, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    image: null,
    isFetch: false,
    err: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        // Initializing API call and showing fetching message
        case INIT_FETCH:
            return {
                ...state,
                isFetch: true
            };
        // Showing the results of the API call - Res.data
        case FETCH_SUCCESS:
            return {
                ...state,
                image: action.payload,
                isFetch: false
            };
        // We broke something, show me the error
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetch: false
            };
        // Initial Render - Initial State shown
        default:
            return state;
    }
};

export default appReducer;
