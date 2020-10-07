import {FETCHING_DATA_START, FETCHED_DATA, FETCHED_ERROR} from '../actions/'
const initialState = {
    questions:[],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA_START: 
            return {
                ...state,
                isFetching: true
            };
        case FETCHED_DATA:
            return {
                ...state,
                isFetching:false,
                questions: [action.payload]
            }
        case FETCHED_ERROR:
            return {
                ...state,
                isFetching:false,
                error: action.payload

            }
        default:
            return state;
    };

}

export default reducer;