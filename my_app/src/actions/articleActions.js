import axios from 'axios';

export const FETCH_ARTICLE_DATA_START = 'FETCH_ARTICLE_DATA_START';
export const FETCH_ARTICLE_DATA_SUCCESS = 'FETCH_ARTICLE_DATA_SUCCESS';
export const FETCH_ARTICLE_DATA_FAILURE = 'FETCH_ARTICLE_DATA_FAILURE';
export const CHANGE_ARTICLE_URL = 'CHANGE_ARTICLE_URL';

export const getData = () => {
    return dispatch => {
        console.log('actionInvoked');
        dispatch({ type: FETCH_ARTICLE_DATA_START });
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8fca6a2cea4246498ba7460b9eb2346e`)
            .then(res => {
                console.log('resdata', res);
                dispatch({ type: FETCH_ARTICLE_DATA_SUCCESS, payload: res.data.articles} )
            })
            .catch(err => dispatch({ type: FETCH_ARTICLE_DATA_FAILURE, payload: err} ))
    }
}