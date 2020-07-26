import { FETCH_WEATHER } from '../actions';

const initialState = {

};

export const weatherReducer = (state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER:
            break;
        default:
            return state;
    }
};