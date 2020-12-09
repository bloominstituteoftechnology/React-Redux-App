

const initialState = {
    answer: '',
    isFetching: false,
    error: ''
};

export const answerReducer = (state = initialState, action) => {
    switch(action.type) {
        case("FETCHING_ANSWER_START"):
            return({
            ...state,
            isFetching: true,
            error: ''
        });
        case("FETCHING_ANSWER_SUCCESS"):
            return({
            ...state,
            answer: action.payload,
            isFetching: false,
            });
        case("FETCHING_QUOTE_FAIL"):
            return({
            ...state,
            error: action.payload    
            });
            default:
                return state;    
    } 
}