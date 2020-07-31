import { FETCHING_DOGS_START, FETCH_DOGS_SUCCESS, FETCH_DOGS_ERROR } from '../actions/actionIndex';

export const initialState = {
    dogs: [],
    isFetching: false,
    error: ''
};

export const pupReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_DOGS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DOGS_SUCCESS:
            console.log('from reducer:FDS', state.dogs)
            return {
                ...state,
                isFetching: false,
                dogs: action.payload,
                error: ''
            }
        case FETCH_DOGS_ERROR:
            console.log('from reducer:FDE', state.dogs)
            return {
                ...state,
                isFetching: false,
                error: console.log("Who didn't let the dogs out? Doggie data not Found")

            }
        default:
            return state;
    }

}