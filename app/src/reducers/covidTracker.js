import { FETCH_COVID_DATA, LOADING_ERROR, UPDATE_COUNTRY } from '../actions/types';

const initialState = {
    loading: true,
    data: {},
    error: '',
    country: {
        data: null,
        news: []
    }
}

export default (state=initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case LOADING_ERROR:
            return {
                ...state,
                data: {},
                error: payload,
                loading: false,
                country: {
                    data: null,
                    news: null
                }
            };
        case FETCH_COVID_DATA:
            return {
                ...state,
                loading: false,
                error: '',
                data: payload
            }
        case UPDATE_COUNTRY:
            return {
                ...state,
                country: {
                    data: payload.data,
                    news: payload.news
                }
            }
        default:
            return state;
    }
}