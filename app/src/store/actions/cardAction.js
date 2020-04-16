import axios from 'axios';

export const fetchCard = () => {
    return dispatch => {
        dispatch({ type: "FETCH_CARD_START"});
        axios
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => console.log(res))
        //     {
        // dispatch({ type: 'FETCH_CARD_SUCCESS', payload: res.data.card})
        // })
        .catch(err => console.log(err.response));
    };
};

export const updateTitle = newTitle => {
    return {};
}