import { GET_RECIPES_START, GET_RECIPES_SUCCESS, GET_RECIPES_FAILURE  } from '../actions';

const initialState = {
    isLoading: false,
    recipes: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipes: action.payload
            };
        case GET_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};