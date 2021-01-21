import axios from 'axios';


export const FETCH_DEALS = "FETCH_DEALS";
export const FETCH_DEALS_FAIL = "FETCH_DEALS_FAIL";
export const FETCH_DEALS_SUCCESS = "FETCH_DEALS_SUCCESS";

export const getDeals = () => dispatch => {
    dispatch({ type:FETCH_DEALS});
    axios 
        .get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
        .then((resp)=>{
            dispatch({ type:FETCH_DEALS_SUCCESS, payload: resp.data.deals});
        })
        .catch(err => {
            dispatch({ type:FETCH_DEALS_FAIL, payload:err.response.code});
        });
}


