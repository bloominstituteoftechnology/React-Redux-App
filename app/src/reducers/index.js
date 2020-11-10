import {FETCH_FACTS_START} from '../actions/index.js'
import {FETCH_FACTS_SUCCESS} from '../actions/index'

const initialState = {
    data: [],
    loading: false
}

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_FACTS_START:
        return {
          ...state,
          loading: true,
        };
        case FETCH_FACTS_SUCCESS:
            return {
              data: action.payload,
              loading: false,
            };
      default:
        return state;
    }
  }
  
  export default reducer;