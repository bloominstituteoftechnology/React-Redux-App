export const initialState = {
  currentCrypto: '',
  exchangeCrypto: '',
  cryptoValue: '',
  listOfCrypto: [],
}

const reducer = (state,action) => {
  switch(action.type){
    case("GET_EXCHANGE_VALUE"):
      console.log(state)
      console.log(action)
      return({
        ...state,
        listOfCrypto: action.payload
      })

    case("ADD_VALUES"):
      return({
        ...state,
        [action.payload]: action.value
      })
    default:
      return state;
  }
}

export default reducer