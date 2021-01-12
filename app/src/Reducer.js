import { 
    GET_CHAPTER,
    GET_NAME,
    GET_SCRIPTURE_FAILURE 

} from "./Actions"

const initialState = {
    chapter: '',
    error: '',
    first_name: '',
    last_name: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_NAME:
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
                
            }

        case GET_CHAPTER:
            return {
                ...state,
                chapter: action.payload
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