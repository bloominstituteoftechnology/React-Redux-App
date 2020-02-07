import axios from 'axios';

export const PREPARED_DATA='PREPARED_DATA'
export const UPDATE_INFO = 'UPDATE_INFO'
export const SET_ERROR = 'SET_ERROR'


export const prepareData = () => dispatch => {
  dispatch({ type: PREPARED_DATA });

   setTimeout(() => {
     axios
       .get('https://api.harvardartmuseums.org/object?apikey=e491ab20-4929-11ea-8e83-49c16382ded7')
       .then(response => {
         console.log('API INFO HERE', response.data.records);
         dispatch({ type: UPDATE_INFO, payload: response.data.records });
       })
      .catch(error => {
            console.log('None for You', error);
      dispatch({type:SET_ERROR, payload:'None for You'})
    });
    }, []);
    
  }


  //https://api.harvardartmuseums.org/object?apikey=e491ab20-4929-11ea-8e83-49c16382ded7