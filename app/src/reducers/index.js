import {START, SUCCESS, FAILURE} from '../actions/index';

const initialState = {

    isLoading: false,
    anime: [],
    error: ""

};

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case START:
            return {
                ...state,
                isLoading: true

            }
            case SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    anime: action.payload
                }
            case FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            default:
                return state;

    }
}

export default reducer;