import {FETCHING_DATA_START, FETCHED_DATA} from '../actions/'
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
        
        default:
            return state;
    };

}

export default reducer;