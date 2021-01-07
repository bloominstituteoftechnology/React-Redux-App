import axios from 'axios';



export const fetchQuote = () => (dispatch) => {
    console.log('getting quote');
    dispatch({ type: "FETCHING_QUOTE_START" });
    
    axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => {
            dispatch({ type: "FETCHING_QUOTE_SUCCESS", payload: res.data.value })
            console.log('API response', res);
        })
        .catch(err => {
            dispatch({ type: "FETCHING_QUOTE_ERROR", payload: err.response })
            console.log('error', err);
        });
};