import axios from 'axios';

export const FETCH_FACTS_START = 'FETCH_FACTS_START';
export const FETCH_FACTS_SUCCESS = 'FETCH_FACTS_SUCCESS';



export const getFacts = () => dispatch => {
  dispatch({ type: FETCH_FACTS_START });
  axios.get('https://cat-fact.herokuapp.com/facts/').then(r => 
  dispatch({ type: FETCH_FACTS_SUCCESS, payload: r.data.all })
  )
};
