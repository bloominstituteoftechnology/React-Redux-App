<<<<<<< HEAD

import {
    FETCHING_POKEMON_START,
    FETCHING_POKEMON_SUCCESS,
    FETCHING_POKEMON_FAILURE
} from "../actions";

const initialState = {
    isLoading: false,
    pokemon: null,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            };
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
=======
import {
    FETCHING_GEMINI_START,
    FETCHING_GEMINI_SUCCESS,
    FETCHING_GEMINI_FAILURE
} from "../actions"
>>>>>>> 796ddc0eda8adfba8ef29ac64552223190ebe626
