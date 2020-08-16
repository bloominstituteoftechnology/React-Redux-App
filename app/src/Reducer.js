import { 
    GET_GENESIS1,
    GET_GENESIS2, 
    GET_SCRIPTURE_FAILURE 

} from "./Actions"

const initialState = {
    genesis1: '',
    genesis2: '',
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_GENESIS1:
            return {
                ...state,
                genesis1: action.payload
            }
        
        case GET_GENESIS2:
            return {
                ...state,
                genesis2: action.payload
            }

        case GET_SCRIPTURE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }

}