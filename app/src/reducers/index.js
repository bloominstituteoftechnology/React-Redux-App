import { FETCH_COMIC_START } from '../actions';

const initialState = {
    fox: {},
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
        default:
            return state;
    }
}