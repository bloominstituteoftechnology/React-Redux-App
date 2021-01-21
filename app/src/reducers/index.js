import { FETCH_API_FAIL, FETCH_API_SUCCESS, FETCH_API_START } from '../actions';

const initialState = {
    characters: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case(FETCH_API_START):
            return({
                ...state,
                isFetching: true,
                error: '',
                characters: []
            })
        case(FETCH_API_SUCCESS):
            return({
                ...state,
                characters: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_API_FAIL):
                return({
                    ...state,
                isFetching: false,
                error: action.payload
                })
            default:
                return(state);
    }
}