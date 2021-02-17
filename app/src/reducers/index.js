import { FETCH_IMG_LOADING, FETCH_IMG_SUCCESS, FETCH_IMG_FAIL } from '../actions'


const initialState = {
    isFetching:false,
    img:'',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMG_LOADING:
            return ({
                ...state,
                isFetching: true
            })
        case FETCH_IMG_SUCCESS:
            return({
                ...state,
                img: action.payload,
                isFetching: false
            })
        case FETCH_IMG_FAIL:
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })    
        default:
            return state
    }

}

export default reducer