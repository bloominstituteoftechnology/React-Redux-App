import {
    FETCH_ADVICE_START,
    FETCH_ADVICE_SUCCESS,
    FETCH_ADVICE_FAIL
  } from "../actions/actions.js";

    const initialState = {
        advice: null,
        isFetching: false,
        error: ""
    };


    export const reducer = (state = initialState, action) => {

        console.log("reducer", action);

        switch (action.type) {

            case FETCH_ADVICE_START:
            return {
                ...state,
                isFetching: true, //INFORM OUR APP THAT WE ARE CURRENTLY FETCHING SOME DATA FROM THE API
                error: "" //CLEAR OUT ERROR IF WE ARE TRANSITIONING FROM AN ERROR STATE
            };

            case FETCH_ADVICE_SUCCESS:
            return {
                ...state,
                advice: action.payload,
                isFetching: false,
                error: ""
            };

            case FETCH_ADVICE_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false //we have gotten our call back and we are no longer fetching
            };
            
            default:
            return state;
        }

      };


