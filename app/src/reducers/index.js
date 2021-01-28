import { FETCH_GAME , FETCH_SUCCESS, FETCH_ERROR } from '../actions'

const initialState = {
    isLoading : false,
    gameDeals : [],
    error : ""
}; 

export const gameReducer = ( state = initialState , action ) => {
    switch(action.type) {
        case FETCH_GAME:
            return {
                ...state,
                isLoading : true, 
                error : ""
            };
            case FETCH_SUCCESS:
                return {
                    ...state,
                    isLoading: false, 
                    gameDeals : action.payload
                };
                case FETCH_ERROR:
                    return {
                        ...state,
                        isLoading: false, 
                        error: action.payload
                    }
        default:
            return state;
    }
};