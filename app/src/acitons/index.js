import axios from 'axios'

export const FETCH_PRICE_BTC = 'FETCH_PRICE_BTC'

export const fetcher = () => dispatch => {
    dispatch({ type:FETCH_PRICE_BTC })

    axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
        .then(res => { 
            dispatch({ type: FETCH_PRICE_BTC, payload: res.data.BTC.USD }) 
        })
        .catch(err => console.log(err, 'you dun goofed'))
}