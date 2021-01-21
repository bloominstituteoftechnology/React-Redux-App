import axios from 'axios'

export const getCrypto = () => {

  return(dispatch => {

    axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then(res => {
        dispatch({type: 'FETCH_CRYPTO_V1', payload: res.data})
      })
      .catch(err => console.log(err))

  })
}

