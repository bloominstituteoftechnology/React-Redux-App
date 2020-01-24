import {FETCHING_ACTIVITY_START} from "../actions"
import {FETCHING_DATA_SUCCESS } from "../actions"

const initialState = {
    isLoading: false,
    activity: null,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_ACTIVITY_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCHING_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                activity: action.payload
            }
        default:
            return state;
    }
}
