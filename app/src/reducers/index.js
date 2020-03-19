//finite state machine
const initialState = {
    isLoading: false,
    message: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FERCHING_ACTIVITY_START':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCHING_DATA_SUCCESS':
            // console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                message: action.payload
            }
        default:
            return state;
    }
}