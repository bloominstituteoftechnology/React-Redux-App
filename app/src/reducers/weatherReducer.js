import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
} from '../actions/weatherActions';

const initialState = {
    weather_state_name: 'NA',
    the_temp: '0deg'
};

export const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER:
            break;
        default:
            return state;
    }
};