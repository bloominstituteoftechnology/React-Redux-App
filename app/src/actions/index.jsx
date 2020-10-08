import axios from 'axios';



export const HERE_CAT= 'HERE_CATS';
export const CAT = 'CAT';
export const CAT_ERROR = 'CAT_ERROR';


export const fetchActivity = () => {
    
    return dispatch => {
      dispatch({type:HERE_CAT});
      axios
        .get('https://aws.random.cat/meow')
        .then(res => {
          //res.data ==> activity
          dispatch({type: CAT, payload: res.data.file});
        })
        .catch(err => {
            dispatch({ type: CAT_ERROR, payload: err })
        });
    };
  }; 