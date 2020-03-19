import { FETCH_NEWS } from "../actions/newsActions";

export const initialState = {
    articles: [],
    isLoading: false,
    error: ''
} 

export const newsReducers = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_NEWS: 
        return {
            ...state,
            articles: [...action.payload]
        }
        default: 
        return state;
    }
}