import { FETCH_DATA, LOADING_ERROR, UPDATE_COUNTRY, TOGGLE_MOBILE, FETCH_TOP_HEADLINES } from '../actions/types';

const initialState = {
    loadingCovidData: true,
    loadingNewsData: true,
    loading: true,
    data: {},
    error: '',
    countryData: null,
    news: [],
    mobileOpen: false
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
                news: payload?.news
            };
        case UPDATE_COUNTRY:
            return {
                ...state,
                countryData: payload.countryData,
                news: payload?.news,
                mobileOpen: false
            };
        case TOGGLE_MOBILE:
            return {
                ...state,
                mobileOpen: !state.mobileOpen
            };
        case FETCH_TOP_HEADLINES:
            return {
                ...state,
                countryData: null,
                loading: false,
                error: '',
                news: payload
            }
        default:
            return state;
    }
}