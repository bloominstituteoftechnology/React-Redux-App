import {
    FETCH_NUMERAIRE_PRICE_START,
    FETCH_NUMERAIRE_PRICE_SUCCESS
} from '../actions';

const initalState = {
    isFetching: false,
    numerairePrice: null,
    error: ""
};

export const nmrReducer = (state = initalState, action) => {
    switch(action.type) {
        case FETCH_NUMERAIRE_PRICE_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_NUMERAIRE_PRICE_SUCCESS:

        default:
            return state;
    }
};