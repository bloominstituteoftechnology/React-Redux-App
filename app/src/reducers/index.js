import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions'

const initialState = {
    country: [],
    isLoading: false,
    error: '',
    region: 'africa'
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
                isLoading: false
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }

}
