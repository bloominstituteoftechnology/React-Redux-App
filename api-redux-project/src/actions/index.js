import axios from 'axios';

export const IS_LOADING = "IS_LOADING";

export const DATA_LOADED = "DATA_LOADED";

export const DATA_ERROR = "DATA_ERROR";


//https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

export const loadAoeData = () => (dispatch) =>{
    dispatch({
        type:IS_LOADING
    });

    const apiURL ="https://official-joke-api.appspot.com/jokes/ten"

    axios.get(apiURL)
    .then((res)=>{
        console.log("ol: actions/index.js axios call good", res.data)
        dispatch({type:DATA_LOADED,payload:res.data})
    })
    .catch((err) =>{
        console.log("ol: actions/index.js axios call bad", err)
        dispatch({
            type:DATA_ERROR,
            payload:`error fetching data: ${err.message}`
        })
    })
}