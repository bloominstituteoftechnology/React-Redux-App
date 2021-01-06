const initialState = {
    title: 'Dad Jokes',
    isFetching: false,
    joke: '',
    error: ''
}

export const quoteReducer = (state = initialState, action) => {
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
                joke: action.payload
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
}