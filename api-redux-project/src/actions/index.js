import axios from 'axios';

export const IS_LOADING = "IS_LOADING";

export const DATA_LOADED = "DATA_LOADED";

export const DATA_ERROR = "DATA_ERROR";


//https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

export const loadAoeData = (civName) => (dispatch) =>{
    dispatch({
        type:IS_LOADING
    });

    const apiURL ="//https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"

    axios.get(apiURL)
    .then((res)=>{console.log(res)})
    .catch((err) =>{console.log(err)})

}