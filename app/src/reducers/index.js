import { FETCH_FOXES_START } from '../actions';

const initialState = {
    fox: {},
    isLoading: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FOXES_START:
            console.log('running FETCH_FOXES_START')
            return{
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}