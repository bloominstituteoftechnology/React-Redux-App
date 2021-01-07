const initialState = {
    title: 'Chuck Norris quotes',
    isFetching: false,
    quote: '',
    error: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_QUOTE_START":
            console.log('fetching new joke');
            return {
                ...state,
                isFetching: true
            }
        case "FETCHING_QUOTE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                error: '',
                quote: action.payload
            }
        case "FETCHING_QUOTE_ERROR":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default appReducer;