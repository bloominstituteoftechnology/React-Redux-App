import {
    FETCH_NUMERAIRE_PRICE_START,
    FETCH_NUMERAIRE_PRICE_SUCCESS
} from '../actions';

const initalState = {
    isFetching: false,
    nmrPrice: null,
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
            console.log(`${FETCH_NUMERAIRE_PRICE_SUCCESS}`, state.isFetching);
            return {
                ...state,
                isFetching: false,
                nmrPrice: action.payload
            };

        default:
            return state;
    }
};