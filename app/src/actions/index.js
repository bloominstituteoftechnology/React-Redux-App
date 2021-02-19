import axios from 'axios';

export const FETCH_QUOTE_LOADING = "FETCH_QUOTE_LOADING";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL";


export const getQuote = () => dispatch => {
    dispatch(fetchQuoteLoading());

    axios
        .get('http://tronalddump.io/random/quote')
        .then(res=>{
            console.log(res.data.value)
            dispatch(fetchQuoteSuccess(res.data.value));
        })
        .catch(err=>{
            dispatch(fetchQuoteFail(err.Response.code));
        });
}

export const fetchQuoteLoading = () => {
    return({ type:FETCH_QUOTE_LOADING});
}

export const fetchQuoteSuccess = (quote) => {
    return({type:FETCH_QUOTE_SUCCESS, payload:quote});
}

export const fetchQuoteFail = (error) => {
    return({type:FETCH_QUOTE_FAIL, payload:error});
}