import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    mlbData: [],
    isLoading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return{
                ...state,
                isLoading:true,
                error:''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading:false,
                mlbData: action.payload,
                error: ''
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            }    
        
        default:
            return state
    }
}

export default reducer