import { GET_JOKE_START, GET_JOKE_SUCCESS, GET_JOKE_ERROR } from "../actions";

const initialState = {
    dadJoke: {},
    fetching: false,
    error: '',
};

export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE_START:
            return {...state, fetching: true};
        case GET_JOKE_SUCCESS:
            return {...state, dadJoke: action.payload, fetching: false};
        case GET_JOKE_ERROR:
            return {...state, error: action.payload, fetching: false};
        default:
            return state;
    }
};
