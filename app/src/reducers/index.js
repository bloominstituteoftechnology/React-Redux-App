import {FETCHING_PIC_START, FETCHING_PIC_SUCCESS,FETCHING_PIC_FAIL} from '../actions/index';
export const initialState = {
    picture:'',
    isFetching:false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCHING_PIC_START):
            return({
                ...state,
                isFetching:true,
                error:''
            })
        case(FETCHING_PIC_SUCCESS):
            return({
                ...state,
                isFetching: false,
                picture: action.payload,
            })
        case(FETCHING_PIC_FAIL):
            return({
                ...state,
                error: action.payload
            })
        default:
            return(state)
    }
}