import axios from 'axios';

export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadDataForLiquor = (liquor) => (dispatch) => {
    dispatch({ type: IS_LOADING });

    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`;

    axios
        .get(apiUrl)
        .then((res) => {
            console.log(res.data.drinks);
            dispatch({ type: DATA_LOAD_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err)
            console.log(err.request);
            dispatch({
                type: DATA_LOAD_ERROR,
                payload: `error fetching data: ${err.message}`
            });
        });
}