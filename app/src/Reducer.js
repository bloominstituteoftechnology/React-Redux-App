import { 
    GET_CHAPTER,
    GET_SCRIPTURE_FAILURE 

} from "./Actions"

const initialState = {
    chapter: '',
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

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