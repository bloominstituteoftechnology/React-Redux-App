import { GET_SCRIPTURE, GET_SCRIPTURE_FAILURE } from "./Actions"

const initialState = {
    content: '',
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_SCRIPTURE:
            return {
                ...state,
                content: action.payload
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