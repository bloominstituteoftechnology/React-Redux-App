import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE ='FETCH_FAILURE';

export const fetchPlayerData = () => dispatch => {

    dispatch({ type: START_FETCHING });

    axios
     .get('https://www.balldontlie.io/api/v1/players')
     .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
     .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
}


// DATA IN API***************
// {"data":[{"id":14,"first_name":"Ike","height_feet":null,"height_inches":null,"last_name":"Anigbogu","position":"C","team":{"id":12,"abbreviation":"IND","city":"Indiana","conference":"East","division":"Central","full_name":"Indiana Pacers","name":"Pacers"},"weight_pounds":null}
