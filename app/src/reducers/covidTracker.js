import { FETCH_DATA, LOADING_ERROR, UPDATE_COUNTRY } from '../actions/types';

const initialState = {
    loading: true,
    data: {},
    error: '',
    country: {}
}

export default (state=initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case LOADING_ERROR:
            return {
                ...state,
                data: {},
                error: payload,
                loading: false
            };
        case FETCH_DATA:
            return {
                ...state,
                loading: false,
                error: '',
                data: payload
            }
        case UPDATE_COUNTRY:
            return {
                ...state,
                country: payload
            }
        default:
            return state;
    }
}