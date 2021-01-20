import axios from 'axios';

export const FETCH_HOUSES_START = 'FETCH_HOUSES_START';
export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL';
export const SET_DISPLAY_HOUSE = 'SET_DISPLAY_HOUSE';

export const getHouses = () => dispatch => {
  dispatch({ type: FETCH_HOUSES_START });
  axios
    .get('https://www.anapioficeandfire.com/api/houses?pageSize=150')
    .then(res =>
      dispatch({ type: FETCH_HOUSES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_HOUSES_FAIL, payload: err }));
};

export const setDisplayHouse = (houseName) => dispatch => {
  dispatch( {
    type: SET_DISPLAY_HOUSE,
    payload: houseName
  })
}