const initialState = {
    launches: [],
    isLoading: false,
    error: ''
}



export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LAUNCHES_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'FETCH_LAUNCHES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                launches: action.payload
            }
        default:
            return state
    }
}