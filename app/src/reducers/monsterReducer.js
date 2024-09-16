import { FETCH_DATA, UPDATE_MONSTERS, SET_ERROR } from '../actions'

const initialState = {
    monsters: [],
    isFetchingData: false,
    error: ''
}

export const monsterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                monsters: []
            }
        case UPDATE_MONSTERS:
            return {
                ...state,
                monsters: action.payload,
                isFetchingData: false
            }
            case SET_ERROR: 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default: return state

    }

}