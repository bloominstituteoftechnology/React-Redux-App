const initialState = {
    quote: '',
    isFetching: false,
    error: '',
    author: ''
  };
  
  export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_QUOTE_START':
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_QUOTE_SUCCESS':
        console.log("action.payload",action.payload)
        const ranNum = Math.floor(Math.random()*(500-0)) + 0;
        return {
          ...state,
          isFetching: false,
          author: action.payload.data[ranNum].author,
          quote: action.payload.data[ranNum].en,
          error: ''
        };
      case 'FETCH_QUOTE_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  