import axios from 'axios'

export const UPDATE_TITLE = "UPDATE_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";


export const updateTitle = (newTitle) => {
    return {type: UPDATE_TITLE, payload: newTitle}
}

export const toggleEditing = () => {
    return {type: TOGGLE_EDITING}
}

const headers = {
    Accept: 'application/json'
}

axios.get('http://api.icndb.com/jokes/random').then(res => {
    console.log(res.data)
})

export const getJoke = () => (dispatch) => {
    dispatch({ type: "FETCHING_QUOTE_START" });
    axios.get("http://api.icndb.com/jokes/random", {headers}) 
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.value.joke});
    })
    .catch(err => {
        dispatch({ type: FETCHING_QUOTE_FAILURE, payload: err });
    })
}