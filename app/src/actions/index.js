import axios from "axios"

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';


export const getShoes = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axios
    .get('https://api.thesneakerdatabase.com/v1/sneakers?limit=70&brand=jordan')
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_DATA_FAIL, payload: err})
  })
}


  // dispatch({ type: FETCH_DATA_START })
  // axios
  //   .get('https://api.thesneakerdatabase.com/v1/sneakers?limit=20&brand=jordan')
  //   .then(res => {
  //     console.log(res.data)
  //     dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
  //   })
  //   .catch(err => {
  //       console.log(err)
  //       dispatch({
  //     }
  // }

