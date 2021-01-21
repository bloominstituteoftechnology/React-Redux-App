import { FETCH_DEALS, FETCH_DEALS_SUCCESS, FETCH_DEALS_FAIL} from '../actions/index';

const initialState = {
  deals: [] ,
  isFetching: false,
  error: ''
};

export const dealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_DEALS):
      return({
        ...state,
        isFetching: true,
        error:'',
        quote:''
      });
    case(FETCH_DEALS_SUCCESS):
      return({
        ...state,
        quote: action.payload,
        isFetching: false,
        error:''
      })
    case(FETCH_DEALS_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};