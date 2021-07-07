const initialstate = {
    articleTitle: "News",
    isFetching: false,
    error: ""

};
export const FETCHING_NEWS_START = 'FETCHING_NEWS_START';
export const FETCHING_NEWS_SUCCESS = 'FETCHING_NEWS_SUCCESS';
export const FETCHING_NEWS_FAILURE = 'FETCHING_NEWS_FAILURE';


export const reducer = (state = initialstate, action) => {
    switch (action.type){
        case FETCHING_NEWS_START:
            return{
                ...state, 
                isFetching: true
            };
        case FETCHING_NEWS_SUCCESS:
            return{
                ...state,
                articleTitle: action.payload.results[0].title,
                isFetching: false
            };
        case FETCHING_NEWS_SUCCESS:
            return{
                ...state,
                articleTitle: action.payload.results[1].title,
                isFetching: false
            };
        case FETCHING_NEWS_FAILURE:
            return{
                ...state,
                isFetching: false
            };
        default:
            return state;
        }
}