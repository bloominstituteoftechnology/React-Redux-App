import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';


const initialState = {
    teamRoster: [],
    isFetching: false,
    error: ''
};


const reducer = (state = initialState, action) => {
    switch(action.type){
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
                teamRoster: action.payload,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;