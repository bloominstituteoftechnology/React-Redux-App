import { FETCH_SORTINGHAT_START, FETCH_SORTINGHAT_FAIL, FETCH_SORTINGHAT_SUCCESS } from '../Actions/actions';

const initialState = {
    house: house,
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_SORTINGHAT_START:
            return {
                ...state,
                isFetching: true,
                error:''
            };
        case FETCH_SORTINGHAT_SUCCESS:
            return {
                ...state,
                house: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SORTINGHAT_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;