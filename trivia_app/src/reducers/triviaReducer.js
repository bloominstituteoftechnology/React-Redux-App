import { FETCH_TRIVIA_START, FETCH_TRIVIA_SUCCESS } from '../actions/triviaActions'

const initialState = {
    results: [],
    isLoading: false,
    error: "error", 
}

export const triviaReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRIVIA_START: 
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                results: action.payload
            }
        default: 
            return state; 
    }
}