import {RANDOM_USER_START, RANDOM_USER_SUCCESS, RANDOM_USER_FAILURE} from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    user: {gender: "", name: "", phone: 0 }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case RANDOM_USER_START:
            return {
                ...state,
                isLoading: true
            };
            case RANDOM_USER_SUCCESS: 
            return {
                ...state, 
                user: {...state.user, name: action.payload},
                isLoading: false
            };
            case RANDOM_USER_FAILURE: 
            return {
                ...state, 
                error: action.payload,
                isLoading: false
            };
            default: return state;
    }
}

export default reducer;