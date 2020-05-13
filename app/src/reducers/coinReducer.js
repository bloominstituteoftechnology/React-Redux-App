import React from 'react'
import { FETCH_COINS_START, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../actions/actions'

const initialState = {

    isFetching: false,
    coins: [],
    error: null


}

export const coinReducer = (state=initialState, action) => {


    switch(action.type) {
        case FETCH_COINS_START:
            return {

                ...state,
                isFetching:true

            }
        case FETCH_COINS_SUCCESS:
            return {

                ...state,
                isFetching:false,
                coins: action.payload.slice(0,10)

            }
        case FETCH_COINS_FAILURE:
            return {

                ...state,
                isFetching:false,
                error: action.payload

            }
        
        default:
            return state

    }


}