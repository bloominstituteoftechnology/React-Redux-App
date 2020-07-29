import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
} from '../actions/weatherActions';

const initialState = {
    weather: [],
    error: '',
    isFetching: false
};

export const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_WEATHER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};