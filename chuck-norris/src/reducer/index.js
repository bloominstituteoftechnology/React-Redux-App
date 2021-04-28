import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE, TOGGLE_EDITING, UPDATE_TITLE } from "../actions";

const initialState = {
    editing: false, 
    loading: false,
    error: '',
    joke: '',
    title: 'Chuck Norris Got Jokes!'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return { ...state, title: action.payload, editing: false }
        case TOGGLE_EDITING: 
            return { ...state, editing: !state.editing }
        case FETCHING_QUOTE_START:
            return { ...state, loading: true }
        case FETCHING_QUOTE_SUCCESS:
            return { ...state, loading: false, joke: action.payload }
        case FETCHING_QUOTE_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            console.log("Error: unknown action type in reducer");
            return state;  
    }
}