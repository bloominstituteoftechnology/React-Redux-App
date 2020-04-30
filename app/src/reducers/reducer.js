// imported the action types for use by the reducer function
import { FETCH_SHOW_START, FETCH_SHOW_SUCCESS, FETCH_SHOW_FAIL } from '../actions/actions';

// Set the intital state to the data for the Friends TV Show
const initialState = {
    title: 'Friends',
    poster: 'https://image.tmdb.org/t/p/original/xaEj0Vw0LOmp7kBeX2vmYPb5sTg.jpg',
    seasons: 10,
    episodes: 236,
    firstAir: '1994-09-22',
    lastAir: '2004-05-06',
    error: '',
    isFetching: false
};

// Create a reducer functions that has three possible action types as cases 
const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case FETCH_SHOW_START: // Case executes when the data us being fetched from the api but not completed
            return {
              ...state,
              isFetching: true,
              error: ''
            };
        case FETCH_SHOW_SUCCESS:
            return { // Case executes when the data has been fetched from the api
                ...state,
                title: action.payload.name,
                poster: 'https://image.tmdb.org/t/p/original' + action.payload.poster_path,
                seasons: action.payload.number_of_seasons,
                episodes: action.payload.number_of_episodes,
                firstAir: action.payload.first_air_date,
                lastAir: action.payload.last_air_date,
                isFetching: false,
                error: ''
            };
        case FETCH_SHOW_FAIL:
            return { // Case executes when the data has failed to be fetched from the API
                ...state,
                error: action.payload
            };                   
        default:
            return state;
    }
};


export default reducer;