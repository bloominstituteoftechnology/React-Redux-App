import { FETCH_GOT_DATA, FETCH_GOT_SUCCESS } from '../actions/index'

const initialState = {
    isLoading: false,
    gameOfThronesData: [],
    error: ""
};

export const gameOfThronesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOT_DATA:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_GOT_SUCCESS:
            return {
                isLoading: false,
                gameOfThronesData: action.payload
            };
        default:
            return state;
    }
};
