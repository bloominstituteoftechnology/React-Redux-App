import axios from 'axios';


export const fetchQuote = () => (dispatch) =>  {
    dispatch({ type: 'FETCHING_QUOTE_START'})
}