import axios from 'axios';

export const FETCH_DATA ='FETCH_DATA';
export const GET_QUOTE = 'GET_QUOTE';
export const ERROR = 'ERROR';

export const getQuotes = () => dispatch => {
    dispatch({type: FETCH_DATA});

    axios.get("https://api.quotable.io/random")
.then(response => {
//   console.log(response.data)
  dispatch({type: GET_QUOTE, payload: response.data})
})
.catch(error => {
    console.log("error", error);
    dispatch({
        type: ERROR,
        paylod: "ERROR"
    })
})
}
