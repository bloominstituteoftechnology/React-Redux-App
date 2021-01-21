import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAIL} from '../actions/actions'


const initialState ={
    characters: [],
    error: '',
    isFetching: false
}

export const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_CHARACTER_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_CHARACTER_SUCCESS):
            return({
                ...state,
                characters: [...action.payload],
                error: '',
                isFetching: false
                
            })
        case(FETCH_CHARACTER_FAIL): 
            return({
                ...state,
                error: action.payload,
                isFetching: false
                
            })
        default:
            return state
    }
}