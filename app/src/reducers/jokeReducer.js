import {
    JOKE_FETCH_SUCCESS,
    NEXT_JOKE,
    ERROR,
    JOKE_FETCH_START
} from '../actions/jokeActions'

const initialState = {
    isLoading: false,
    jokeData: [],
    error: ''
}

export const jokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case JOKE_FETCH_START:
            return ({
                ...state,
                isLoading: true,
                error: ''
            })
        case JOKE_FETCH_SUCCESS:
            return ({
                ...state,
                jokeData: action.payload,
                isLoading: false,
                error: ''
            })
        case ERROR:
            return ({
                ...state,
                error: action.payload,
                isLoading: false
            })
        case NEXT_JOKE: 
            return ({
                ...state,
                jokeData: action.payload,
                isLoading: false,
                error: false
            })
        default:
            return state
    }
}