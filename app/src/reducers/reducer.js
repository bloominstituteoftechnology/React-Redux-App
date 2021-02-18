import { FETCH_DOG_LOADING, FETCH_DOG_SUCCESS, FETCH_DOG_FAIL} from '../actions/action';

const initialState = {
    message: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_DOG_LOADING):
            return({
                ...state,
                isFetching: true
            })

        case(FETCH_DOG_SUCCESS):
            return({
                ...state,
                message: action.payload,
                isFetching: false
            });

        case(FETCH_DOG_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
        });

        default:
            return state;
    }
}