import axios from "axios"

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCSESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';


export const getShoes = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  // axios
  //   .get('https://api.thesneakerdatabase.com/v1/sneakers?limit=20&brand=jordan')
  //   .then((res => {
  //     console.log(res.data)
  //     dispatch({ type: FETCH_DATA_SUCCSESS, payload: res.data.results });
  //   })
        // .catch(err => {
        //   dispatch({ type: FETCH_DATA_FAIL, payload: err
        //     // `${err.response.status} ${err.response.data}`
        //   });
  }
