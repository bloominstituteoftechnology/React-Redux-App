import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from "../actions";

const initialState = {
    data: [],
    loading: false,
    status: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            }
        case DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.payload.results],
                loading: false
            }
        case DATA_ERROR:
            return {
                ...state,
                status: "Error!",
                loading: false
            }
        default:
            return state
    }
}