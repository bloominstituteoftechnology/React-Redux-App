import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCES = "FETCH_DATA_SUCCES";
export const FETCH_DATA_INFO = 'FETCH_DATA_INFO'


export const fetchData = (coin) => {
  
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_DATA_SUCCES, payload: res.data.market_data });
        dispatch({type: FETCH_DATA_INFO, payload: res.data})
        // res.data are objects
      })
      .catch(err => console.log(err));


  };

};
