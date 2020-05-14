import axios from 'axios';


export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: "FETCH_QUOTE_START"})
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
             console.log(res)
            // res.data.value
            dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.value });
         })
        .catch(err => {
            dispatch({ type: 'FETCH_ERR_MESSAGE', payload: `Error ${err.response.status}: ${err.response.data}`})
        })
    };
};

export const updateTitle = newTitle => {
    return {}
}