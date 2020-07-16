import axios from 'axios'

export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const fetchProducts = () => {
    return dispatch => {
        dispatch({ type: FETCH_PRODUCTS_START});
        axios
        .get("http://makeup-api.herokuapp.com/api/v1/products.json")
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data});
        })

        .catch(err => console.log(err))
    }

}
