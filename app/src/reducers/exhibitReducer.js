import { 
    FETCH_EXHIBIT_START, 
    FETCH_EXHIBIT_SUCCESS, 
    FETCH_EXHIBIT_FAIL 
} from '../actions/exhibitActions';

const initialState = {
    "data": "",
    "error": "",
    "isFetching": false
}

export const exhibitReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EXHIBIT_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_EXHIBIT_SUCCESS: 
            return {
                ...state, 
                isFetching: false,
                data: action.payload,
                error: ''
            }
        case FETCH_EXHIBIT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}