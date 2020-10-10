import axios from 'axios';

// This is the action type
export const FETCH_EXHIBIT_START = 'FFETCH_EXHIBIT_START';
export const FETCH_EXHIBIT_SUCCESS = 'FETCH_EXHIBIT_SUCCESS';
export const FETCH_EXHIBIT_FAIL = 'FETCH_EXHIBIT_FAIL';

// This is the action creator, it is a function that creates the action...
export const addExhibit = (artExhibit) => dispatch => {
    dispatch({ type: FETCH_EXHIBIT_START });
    axios  
        .get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=4f8a6b0377385afdd6d94d36e621d948&query=digital&year_start=2002')
        .then(res => {
            console.log(res)
        })
        .then(res => 
            dispatch({ type: FETCH_EXHIBIT_SUCCESS, payload: res.data.results})
        )
        .catch( err => dispatch({ type: FETCH_EXHIBIT_FAIL, payload: err }))
}
