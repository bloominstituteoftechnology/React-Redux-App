import { FETCH_DATA, UPDATE_BEER, SET_ERROR } from '../actions';

const initialState = {
    beers: [],
    isFetchingData: false,
    error: ''
};

export const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                beers: []
            };
        case UPDATE_BEER:
            return {
                ...state,
                beers: action.payload,
                isFetchingData: false,
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;            
    }
};