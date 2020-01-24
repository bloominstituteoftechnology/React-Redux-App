import axios from 'axios';

export const HERE_KITTY = 'HERE_KITTY';
export const CATS = 'CATS';
export const KITTY_ERROR = 'KITTY_ERROR';


export const fetchActivity = () => {
    return dispatch => {
      dispatch({type:HERE_KITTY});
      axios
        .get('https://aws.random.cat/meow')
        .then(res => {
          //res.data ==> activity
          dispatch({type: CATS, payload: res.data.file});
        })
        .catch(err => {
            dispatch({ type: KITTY_ERROR, payload: err })
        });
    };
  };