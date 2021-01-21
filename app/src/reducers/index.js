import {FETCHING_GAME_START, FETCHING_GAME_SUCCESS,FETCHING_GAME_FAIL} from '../actions/index';

export const initialState = {
    games:[],
    isFetching:false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCHING_GAME_START):
            return({
                ...state,
                isFetching:true,
                error:''
            })
        case(FETCHING_GAME_SUCCESS):
            console.log('***********')
            return({
                ...state,
                isFetching: false,
                games: [...action.payload],
            })
        case(FETCHING_GAME_FAIL):
            return({
                ...state,
                error: action.payload
            })
        default:
            return(state)
    }
} 