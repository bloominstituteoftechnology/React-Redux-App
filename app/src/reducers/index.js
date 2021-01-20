import { FETCH } from '../acitons/index'

const initialState = {
    name: '',
    price: '',
    percentChange: '',
    isSelected: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                isSelected: true,
            }
        default:
            return console.log(state)
    }
}