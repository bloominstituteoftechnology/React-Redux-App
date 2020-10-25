  import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS
    } from '../reducers/actions';
    
    const initialState = {};
    
    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCHING_QUOTE_START:
              return {
                  ...state,
                  isFetching: true,
                  error: ""
              };
            case FETCHING_QUOTE_SUCCESS:
              return {
                  ...state,
                  isFetching: false,
                  quote: action.payload
              };
            default:
            return state;
        }
    };