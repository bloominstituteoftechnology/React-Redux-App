import axios from 'axios';

const headers = {
    Accept: 'application.json'
}


export const fetchQuote = () => (dispatch) =>  {
    dispatch({ type: "FETCHING_QUOTE_START" });
    
    axios.get("https://icanhazdadjoke.com/", { headers: headers })
        .then((res) => {
             console.log(res);
            dispatch({ type: "FETCHING_QUOTE_SUCCESS", payload: res.data.joke })
           
        })
        .catch(err => {
            dispatch({ type: "FETCHING_QUOTE_ERROR", payload: err.response })
            console.log('error', err);
        })
}