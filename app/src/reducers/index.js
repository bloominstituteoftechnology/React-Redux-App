import { FETCH_PRICE_BTC } from '../acitons/index'

const initialState = {
    name: 'Bitcoin',
    price: [],
    percentChange: '',
    isSelected: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRICE_BTC:
            return {
                ...state,
                price: [],
                percentChange: '',
                isSelected: false,
            }
        default:
            return state
    }
}