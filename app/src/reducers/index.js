import { FETCH_BREWERY_LOADING, FETCH_BREWERY_SUCCESS, FETCH_BREWERY_FAIL } from "../actions";

const initialState = {
    breweries: [],
    error: '',
    isFetching: false
};

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case(FETCH_BREWERY_LOADING):
        return({
            ...state,
            isFetching: true
        })
        case(FETCH_BREWERY_SUCCESS):
        return({
            ...state,
            breweries: action.payload,
            isFetching: false
        })
        case(FETCH_BREWERY_FAIL):
        return({
            ...state,
            error: action.payload,
            isFetching: false
        })
        default:
            return state;
    }
}