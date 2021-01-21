// define + export action constants
export const FETCH_CARDS = 'FETCH_CARDS';

// action creator functions
// return action objects
export const fetchCards = dispatch => {
    dispatch({type: FETCH_CARDS});
    axios
        .get('https://deckofcardsapi.com/api/deck/new/')
        .then((res => {
            dispatch({ type: FETCH_CARDS, payload: res.data})
        }))
};




