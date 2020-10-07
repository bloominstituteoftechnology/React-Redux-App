import axios from 'axios';

export const DATA_GET = 'DATA_GET';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const getData = () => dispatch => {
  dispatch({ type: DATA_GET });
  setTimeout(() => {
    axios
      .get('https://api.ovid19api.com/countries')

      .then(response => {
        // console.log(
        //   response.data.map(country => {
        //     return country.ISO2;
        //   })
        // );
        dispatch({
          type: DATA_SUCCESS,
          payload: response.data.map(country => {
            // return country.Country;
            return { Name: country.Country, ISO: country.ISO2 };
          })
        });
      })
      .catch(error => {
        dispatch({ type: DATA_ERROR, payload: error });
      });
  }, 1500);
};
