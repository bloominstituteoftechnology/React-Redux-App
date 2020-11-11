import { FETCH_NAME_START, 
    FETCH_NAME_SUCCESS, 
    FETCH_NAME_FAILURE } from '../actions'

const initialState = {
    name: null, 
    isFetching: false,
    error: ''
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NAME_START:
            return{
                ...state,
                isFetching: true
            };

        case FETCH_NAME_SUCCESS:
            return{
                ...state,
                name: action.payload,
                isFetching: false,
                error: ''
            }

        case FETCH_NAME_FAILURE:
            return{
                ...state, 
                isFetching: false,
                error: action.payload
            }
            
            default:
                return state;
    }
};

export default reducer;