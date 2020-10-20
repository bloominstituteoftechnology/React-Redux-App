//finite state machine
const initialState = {
    isLoading: false,
    message: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_DATA_START':
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
        case 'SHOW_ERROR':
            return {
                ...state,
                isLoading: false,
                message: null,
                error: action.payload
                //error: "no images to show"
            }
        default:
            return state;
    }
}