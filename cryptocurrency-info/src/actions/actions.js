import * as actions from "./actionCreator";
import Axios from "axios";

const getCoin = (coin) => (dispatch) => {
    console.log("coin Info", coin)
    dispatch({type: actions.FETCH_COIN_REQUEST});

        Axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(res => {
        dispatch({type: actions.FETCH_COIN_SUCCESS, payload: res.data})
    })
        .catch(error => {
        dispatch({
            type: actions.FETCH_COIN_FAILURE, 
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
    })
}

export default getCoin;