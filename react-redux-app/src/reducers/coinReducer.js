import React from "react";
import {
  FETCH_COINS_START,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_FAILURE,
  FETCH_COINS_SPECIFIC,
  FETCH_COINS_SPECIFIC_SUCCESS,
  FETCH_COINS_SPECIFIC_FAILURE,
} from "../actions/actions";

const initialState = {
  isFetching: false,
  isFetchingDetails: false,
  coins: [],
  coinsDetails: null,
  error: null,
  errorDetails: null,
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coins: action.payload.slice(0, 10),
      };
    case FETCH_COINS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_COINS_SPECIFIC:
      return {
        ...state,
        isFetchingDetails: true,
      };
    case FETCH_COINS_SPECIFIC_SUCCESS:
      return {
        ...state,
        isFetchingDetails: false,
        coinsDetails: action.payload,
      };
    case FETCH_COINS_SPECIFIC_FAILURE:
      return {
        ...state,
        isFetchingDetails: false,
        errorDetails: action.payload,
      };

    default:
      return state;
  }
};
