import {RANDOM_QUOTE_START, RANDOM_QUOTE_SUCCESS, RANDOM_QUOTE_FAILURE} from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    user: {name: "Kanye West", quote: "" }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case RANDOM_QUOTE_START:
            return {
                ...state,
                isLoading: true
            };
            case RANDOM_QUOTE_SUCCESS: 
            return {
                ...state, 
                user: {...state.user, quote: action.payload},
                isLoading: false
            };
            case RANDOM_QUOTE_FAILURE: 
            return {
                ...state, 
                error: action.payload,
                isLoading: false
            };
            default: return state;
    }
}

export default reducer;