import { FETCH_COMIC_START, FETCH_COMIC_SUCCESS } from '../actions';

const initialState = {
    comic: {},
    isLoading: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMIC_START:
            console.log('running FETCH_COMIC_START')
            return{
                ...state,
                isLoading: true
            }
        case FETCH_COMIC_SUCCESS:
            console.log(" running FETCH_COMIC_SUCCESS")
            return {
                ...state,
                isLoading: false,
                comic: action.payload
            }
        default:
            return state;
    }
}