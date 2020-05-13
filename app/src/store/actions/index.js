import axios from 'axios';

export const FETCH_NUMERAIRE_PRICE_START = "FETCH_NUMERAIRE_PRICE_START"
export const FETCH_NUMERAIRE_PRICE_SUCCESS = "FETCH_NUMERAIRE_PRICE_SUCCESS"

const baseUrl = 'api.coingecko.com/api/v3/coins/';
const numeraireId = 'numeraire';

// make an async request
// redux-thunk allows us to return functions instead of objects
export const fetchNumeraire = () => {

    return dispatch => {
        dispatch({ type: FETCH_NUMERAIRE_PRICE_START });

        axios
            // .get(`${baseUrl}${numeraireId}`)
            .get('https://api.coingecko.com/api/v3/coins/numeraire')
            .then(res => {
                console.log(res);
                const nmrUSDPrice = res.data.market_data.current_price.usd;
                console.log(nmrUSDPrice);
                dispatch({ type: FETCH_NUMERAIRE_PRICE_SUCCESS, payload: nmrUSDPrice });
            })
            .catch(err => console.log(err));
    };
};