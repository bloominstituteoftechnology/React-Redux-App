import { FETCH_TRIVIA_START } from '../actions/triviaActions'

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
        default: 
            return state; 
    }
}