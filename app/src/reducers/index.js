import {FETCH_START, FETCH_SUCCESS} from '../actions'

const initialState = {
    country: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
              ...state,
              isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                country: action.payload,
                isLoading: true
            }

        default:
            return state;
    }

}