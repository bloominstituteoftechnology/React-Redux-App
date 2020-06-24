
export const initialState = {
    joke: null,
    fetching: false,
    error: ''
};

export const jokesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'START_FETCHING':
            return{
                ...state,
                fetching: true,
                error: '404 not found'
            };

        case 'SUCCESSFUL_FETCH':
            return{
                ...state,
                joke: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}