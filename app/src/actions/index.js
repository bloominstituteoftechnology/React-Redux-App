import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';
export const FETCHING_QUOTE_AUTHOR = 'FETCHING_QUOTE_AUTHOR';

export const getQuote = () => {
    return (dispatch => {

        dispatch({type:FETCHING_QUOTE_START});

        axios
            .get(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.quote.quoteText});
                dispatch({type:FETCHING_QUOTE_AUTHOR, payload:res.data.quote.quoteAuthor});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
            });
    });
}
