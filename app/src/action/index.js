import axios from 'axios';

export const FETCH_CARS_START = 'FETCH_CARS_START';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAIL = 'FETCH_CARS_FAIL';


export const getCars = () => dispatch => {
    dispatch({ type: FETCH_CARS_START});
    axios
    .get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(res => 
        dispatch({ type: FETCH_CARS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: FETCH_CARS_FAIL, payload: err }));
   
};

