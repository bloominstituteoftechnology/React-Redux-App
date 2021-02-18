import { FETCH_BREWERY_LOADING, FETCH_BREWERY_SUCCESS, FETCH_BREWERY_FAIL } from "../actions";

const initialState = {
    breweries: [],
    error: '',
    isFetching: false,
    count: 0
};

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case(FETCH_BREWERY_LOADING):
        return({
            ...state,
            isFetching: true,
        })
        case(FETCH_BREWERY_SUCCESS):
        return({
            ...state,
            breweries: action.payload.map(brewery => {
                return brewery.name
            }),
            isFetching: false,
            count: state.count + 1
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