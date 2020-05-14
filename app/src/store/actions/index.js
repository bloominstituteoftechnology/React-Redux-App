import axios from 'axios';

export const FETCH_NUMERAIRE_PRICE_START = "FETCH_NUMERAIRE_PRICE_START";
export const FETCH_NUMERAIRE_PRICE_SUCCESS = "FETCH_NUMERAIRE_PRICE_SUCCESS";
export const FETCH_TOP_100_COINS_START = "FETCH_TOP_100_COINS_START";
export const FETCH_TOP_100_COINS_SUCCESS = "FETCH_TOP_100_COINS_SUCCESS";


const baseUrl = 'api.coingecko.com/api/v3/coins/';
const numeraireId = 'numeraire';

// make an async request
// redux-thunk allows us to return functions instead of objects
export const fetchNumeraire = () => {

    return dispatch => {
        dispatch({ type: FETCH_NUMERAIRE_PRICE_START });

        axios
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

export const fetchTop100 = () => {
    return dispatch => {
        dispatch({ type: FETCH_TOP_100_COINS_START });

        axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };
};