import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS });
        axios
            .get("https://thereportoftheweek-api.herokuapp.com/reports?between=2018-1-1%7C2018-12-1")
            .then((response) => {
                console.log(response.data)
                dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_PRODUCTS_ERROR,
                    payload: { message: "Whoops! Can't get your product facts for you!" }
                });
            });
    };
};