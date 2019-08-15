import { FETCH_DOGGIES_START,FETCH_DOGGIES_SUCCESS,FETCH_DOGGIES_FAILED } from '../actions/actions';

const iState = {
    dogs: [],
    loading: false,
    error: ''
};

export const reducer = (state = iState, action) => {
    switch(action.type) {
        case FETCH_DOGGIES_START:
            return {
                ...state,
                loading: true,
                error:''
            }
            case FETCH_DOGGIES_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    dogs: action.payload,
                    error: ''
                }
        default:
            return state;
    }
}