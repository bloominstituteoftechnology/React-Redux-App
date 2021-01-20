import axios from 'axios'

export const FETCH = 'FETCH'

export const fetcher = () => (dispatch) => {
    axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XMR&tsyms=USD')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH, payload: res})
        })
        .catch(err => console.log(err, 'you dun goofed'))
    }