import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL } from '../actions/index'

const initialState = {
    characters: [],
    error: '',
    isFetching: false
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_CHARACTERS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer