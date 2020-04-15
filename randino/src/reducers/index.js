import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from "../actions";
import {ranDino} from "../dinoRandomizer"
const initialState = {
    
    dinoInfo: {},
    isLoading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            
            return {
                ...state,
                isLoading: true
            };
        case DATA_SUCCESS:
            return {
                
                ...state,
                dinoInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}