
const intitialValues = {
  currency: '',
  convertCurrency: '',
  valueCurrency: ''
}

export const reducer = (state = intitialValues, action) => {
  switch(action.type){
    case('FETCH_CRYPTO_V1'):
      return({
        ...state,
        convertCurrency: action.payload,
      })
    case('FETCH_CRYPTO_V2'):
      return({
        ...state,
        valueCurrency: action.payload
      })
    default:
      return
  }
}