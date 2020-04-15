export const initialState = {
    isFetching: false,
    error: "",
    quote: ""
}

export const jokesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_QUOTE_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_QUOTE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                quote: action.payload,
                error: ""
            }
        case "FETCH_QUOTE_FAILED":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}