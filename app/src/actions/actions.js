import axios from 'axios'; 

// The three action types our exported for use by the reducer
export const FETCH_SHOW_START = 'FETCH_SHOW_START'; 
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAIL = 'FETCH_SHOW_FAIL';

// getTVShow fetches data from the api and dispatches the action creator for use by the TVCard component
export const getTVShow = () => dispatch => { 
    const generateNumber = (min, max) => { 
        let num = 1;
        num = Math.floor(Math.random()*(max-min+1)+min);
        return num;
    }

    // Stores a random number between 1 and 2000 and this number will be the id of the tv show that is fetched from the api
    let random = generateNumber(1, 2000);

    console.log(random);
    dispatch({ type: FETCH_SHOW_START });
    axios
        .get(`https://api.themoviedb.org/3/tv/${random}?api_key=3afe8d58fab77a72e4b5593fc0dab8a9&language=en-US&include_adult=false`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SHOW_SUCCESS, payload: res.data});
        })
        .catch(err => { dispatch({ type: FETCH_SHOW_FAIL, payload: err })});
}
