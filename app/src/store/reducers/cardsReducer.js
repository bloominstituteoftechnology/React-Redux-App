const intitialState = {
    card: '',
    isFethcing: false,
    error: '',
}

export const cardReducer = (state = intitialState, action) => {
    switch(action.type) {  
        case 'FETCH_CARDSTART':
            return {
                ...state,
                isFethcing: true,
            }
            case'FETCH_CARD_SUCCESS':
            return {
                ...state,
                isFethcing: false,
                card: action.payload,
                error: ''
            }
            default:    
        return state
    }

}