import {
    FETCH_ARTICLE_DATA_START,
    FETCH_ARTICLE_DATA_SUCCESS,
    FETCH_ARTICLE_DATA_FAILURE
} from '../actions/articleActions';

const initialState = {
    articles: [
    ],
    loading: false,
    error: "",
    country: "",
    topic: "",
    mentioning: "",
    date: "",
    publishers: "",
    fetchUrl: "",
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLE_DATA_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_ARTICLE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                articles: action.payload
            }
        case FETCH_ARTICLE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}