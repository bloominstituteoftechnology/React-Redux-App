
import {FETCHING_DATA_SUCCESS } from "../actions"

const initialState = {
    activity: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type){

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
