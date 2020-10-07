import {FETCH_DATA, GET_QUOTE, ERROR} from '../action/action.js'

const initialState = {
    quote: [],
    isFetchingData: false,
    error: ''
}

export const Reducerstate = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                quote: []
            };
            case GET_QUOTE:
                return {
                    ...state,
                    isFetchingData: false,
                    quote: action.payload
                };
                case ERROR:
                    return{
                        ...state,
                        isFetchingData: false,
                        error: action.payload
                    }
                    default:
                        return state;
    }
}