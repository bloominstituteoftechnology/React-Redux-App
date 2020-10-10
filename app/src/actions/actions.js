// This is the action type
export const FETCH_EXHIBIT_START = 'FFETCH_EXHIBIT_START';
export const FETCH_EXHIBIT_SUCCESS = 'FETCH_EXHIBIT_SUCCESS';
export const FETCH_EXHIBIT_FAIL = 'FETCH_EXHIBIT_FAIL';

// This is the action creator, it is a function that creates the action...
export const addExhibit = (artExhibit) => {
    
    return {
        type: FETCH_EXHIBIT_START,
        payload: artExhibit
    }
}
