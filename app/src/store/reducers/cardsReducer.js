const intitialState = {
    card: '',
    isFetching: false,
    error: '',
}

export const cardReducer = (state = intitialState, action) => {
    switch(action.type) {  
        case 'FETCH_CARD_START':
            return {
                ...state,
                isFetching: true,
            }
            case'FETCH_CARD_SUCCESS':
            return {
                ...state,
                isFetching: false,
                card: action.payload,
                error: ''
            }
            case 'FETCH_CARD_FAILURE':
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload,
                }
            default:    
        return state
    }

}