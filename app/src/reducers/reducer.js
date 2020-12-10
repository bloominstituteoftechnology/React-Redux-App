import React from 'react'
import { FETCH_SUCCESS, START_FETCH, FETCH_FAIL } from '../actions/actions';

const initialState = {
    quote: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH: 
            return {...state, isFetching: true}
        case FETCH_SUCCESS: 
            return {...state, quote: action.payload, isFetching: false, error: ''}
        case FETCH_FAIL:
            return {...state, isFetching: false, error: action.payload}
        default: 
            return state
    }
}
