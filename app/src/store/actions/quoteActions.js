import axios from "axios";

// Redux is synchronous
// We need to perform ana sync operation

export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: "FETCH_QUOTE_START" });
        axios.get(`https://sv443.net/jokeapi/category/Programming?blacklistFlags=religious`)
        .then(response => {
            dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: response.data.joke })
            console.log("response logging", response.data.joke)
        })
        .catch(error => {
            console.log("LOG ERROR:", error)
            dispatch({ 
                type: "FETCH_QUOTE_FAILED", 
                payload: `Error ${error}`
            });
        });

    }
}