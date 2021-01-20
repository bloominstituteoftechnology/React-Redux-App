import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";

export const getImage = () => (dispatch) => {
    dispatch({ type: FETCH_QUOTE_START });
    axios
        .get("https://picsum.photos/1920/1080", { responseType: "blob" })
        .then((response) => {
            dispatch({
                type: FETCH_QUOTE_SUCCESS,
                payload: URL.createObjectURL(response.data),
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: FETCH_QUOTE_FAIL, payload: error.data });
        });
};
