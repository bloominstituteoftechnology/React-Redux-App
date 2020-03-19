import { FETCH_DATA, LOADING_ERROR, UPDATE_COUNTRY } from '../actions/types';

const initialState = {
    loadingCovidData: true,
    loadingNewsData: true,
    loading: true,
    data: {},
    error: '',
    countryData: null,
    news: []
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
        case FETCH_DATA:
            return {
                ...state,
                loading: false,
                error: '',
                data: payload.data,
                news: payload.news
            };
        case UPDATE_COUNTRY:
            return {
                ...state,
                countryData: payload.countryData,
                news: payload.news
            };
        default:
            return state;
    }
}