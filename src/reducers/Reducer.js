import {
    FETCHING_FACT_START,
    FETCHING_FACT_SUCCESS,
    FETCHING_FACT_FAILURE
  } from '../actions';
  
export const initialState = {
    isLoading: false,
    fact: null,
    error: ''
  };
  

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_FACT_START: 
        return {
            ...state, isLoading: true
        }
        case FETCHING_FACT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fact: action.payload
            }
        default:
            return state;
    }
}