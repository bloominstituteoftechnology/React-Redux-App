import { 
    GET_CHAPTER,
    GET_NAME,
    GET_SCRIPTURE_FAILURE, 
    SET_LOGGED_IN,

} from "./Actions"

import {SET_PROFILE_PIC, GET_PROFILE_PIC} from "./Components/Dashboard" 

// import { combineReducers } from 'redux'

// combineReducers({
//     reducer,
//     logout
// })



const initialState = {
    chapter: '',
    error: '',
    first_name: '',
    last_name: '',
    loggedIn: false,
    profile_pic_url: '',
    profile_pic_alt: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_NAME:
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
                
            }

        case GET_CHAPTER:
            return {
                ...state,
                chapter: action.payload
            }
        

        case GET_SCRIPTURE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: !state.loggedIn
            }
        
        case SET_PROFILE_PIC:
            return {
                ...state,
                profile_pic_url: action.payload
            }

        case GET_PROFILE_PIC:
            return {
                ...state,
                profile_pic_url: action.payload
            }
        
        
        default:
            return state;
    }

}
