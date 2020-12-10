import { FETCHING_CARD_SUCCESS, FETCHING_CARD_FAILURE, FETCHING_CARD_START } from '../actions/index'

const initialState = {
    card: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_CARD_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCHING_CARD_SUCCESS):
            return({
                ...state,
                card: action.payload,
                isFetching: false
            })
        case(FETCHING_CARD_FAILURE):
            return({
                ...state,
                error: action.payload
            })
        default:
            return state
    }
}