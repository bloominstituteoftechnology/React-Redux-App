import axios from 'axios'

export const FETCH_COINS_START = 'FETCH_COINS_START'
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS'
export const FETCH_COINS_FAILURE = 'FETCH_COINS_FAILURE'

export const fetchCoins = () => {


    return dispatch => {

        dispatch({ type: FETCH_COINS_START })

        axios.get('https://api.coinpaprika.com/v1/coins')
            .then((res) => {

                //res.data is array of 4400 coins res.data[0] is bitcoin
                dispatch({ type: FETCH_COINS_SUCCESS, payload: res.data })


            })
            .catch((err) => {

                dispatch({ type: FETCH_COINS_FAILURE, payload:err })

            })

    }


}
