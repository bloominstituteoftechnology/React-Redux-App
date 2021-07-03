import { FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_FAIL } from './../actions'

const initialState = {
    isFetching: false,
    error: '',
    dogImg: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_DOG_START):
            return({
            ...state,
            isFetching: true,
            error: '',
            dogImg: ''
        });
        case(FETCH_DOG_SUCCESS):
            return({
                ...state,
                isFetching: false,
                error: '',
                dogImg: action.payload
            });
        case(FETCH_DOG_FAIL):
            return({
                ...state,
                isFetching: false,
                error: action.payload,
            });
        default:
            return state

            }

    }
