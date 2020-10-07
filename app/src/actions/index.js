import axios from 'axios';

export const FETCH_INSULT_START = 'FETCH_INSULT_START';
export const FETCH_INSULT_SUCCESS = 'FETCH_INSULT_SUCCESS';
export const FETCH_INSULT_FAIL = 'FETCH_INSULT_FAIL';

export const getInsult = () => dispatch => {
  dispatch({ type: FETCH_INSULT_START });
  axios
    .get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res =>
      dispatch({ type: FETCH_INSULT_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_INSULT_FAIL, payload: err }));
};