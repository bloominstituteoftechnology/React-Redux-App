import { FETCH_ROVERS_START, FETCH_ROVERS_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    data: [],
};

export const roverReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROVERS_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_ROVERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        default:
            return state;
    }
}