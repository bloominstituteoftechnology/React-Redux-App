import {
    FETCH_NUMERAIRE_PRICE_START,
    FETCH_NUMERAIRE_PRICE_SUCCESS,
    FETCH_TOP_100_COINS_START,
    FETCH_TOP_100_COINS_SUCCESS
} from '../actions';

const initalState = {
    isFetching: false,
    nmrPrice: null,
    error: "",
    coinList: []
};

export const nmrReducer = (state = initalState, action) => {
    switch(action.type) {
        case FETCH_NUMERAIRE_PRICE_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_NUMERAIRE_PRICE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                nmrPrice: action.payload
            };
        case FETCH_TOP_100_COINS_START:
            return {
                ...state,
                isFetching: true
            };

        default:
            return state;
    }
};