import axios from 'axios';
export const GET_DATA = 'GET_DATA';
export const UPDATE_HOUSES = 'UPDATE_HOUSES';

export const getData = () => dispatch =>{
   dispatch({type:GET_DATA});
   axios.get('https://www.anapioficeandfire.com/api/houses/')
   .then(res => {console.log(res);
   dispatch({type:UPDATE_HOUSES, payload:res.data});
   })
   .catch(err => console.log(err, 'error fetching data'))
}