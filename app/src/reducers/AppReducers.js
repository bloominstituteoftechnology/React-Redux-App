export const FETCHING_ADVICE_START = "FETCHING_ADVICE_START";
export const FETCHING_ADVICE_SUCCESS = "FETCHING_ADVICE_SUCCESS";
export const FETCHING_ADVICE_FAILURE = "FETCHING_ADVICE_FAILURE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";


export const initialState = { 
    editing: false, 
    loading: false, 
    advice: ''
}


export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_EDITING: 
            return {
                ...state, 
                editing: !state.editing
            }
        case FETCHING_ADVICE_START:
            return { 
                ...state, 
                loading: true };
        case FETCHING_ADVICE_SUCCESS:
            return { 
                ...state, 
                insult: action.payload, 
                loading: false };
        case FETCHING_ADVICE_FAILURE:
            return { 
                ...state, 
                error: action.payload, 
                loading: false };
              default:
                return state;
    }
}