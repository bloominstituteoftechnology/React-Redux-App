import axios from 'axios'; 

export const FETCH_TRIVIA_START = "FETCH_TRIVIA_START"; 
export const FETCH_TRIVIA_SUCCESS = "FETCH_TRIVIA_SUCCESS"; 

export const fetchTrivia = () => (dispatch) => {
    dispatch({ type:FETCH_TRIVIA_START }); 
    axios.get('https://opentdb.com/api.php?amount=5&type=multiple')
    .then((res) => {
        console.log(res)
        dispatch({ type: FETCH_TRIVIA_SUCCESS, payload: res.data.results })
    })
    .catch((err) => console.log(err))
}