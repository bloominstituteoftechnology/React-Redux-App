import { FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions';

export const initialState = {
    dogs: [],
    isLoading: false,
    error: ''
};

export const doggoReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);

    switch(action.type){
        case FETCH_DOG_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dogs: action.payload
            }
        case FETCH_DOG_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
        return state;
    }
};