import axios from 'axios';
import {axiosWithAuth} from './axiosWithAuth'


export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_SCRIPTURE_FAILURE = 'GET_SCRIPTURE_FAILURE';
export const GET_NAME = 'GET_NAME';
export const GET_NAME_FAILURE = 'GET_NAME_FAILURE'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT'



export const getName = (userId) => dispatch => {
 
    axiosWithAuth() 
        .get(`https://chaqar-data.herokuapp.com/api/auth/${userId}`)
        .then(res => {
            dispatch({
                type: GET_NAME, payload: res.data})
        })
        .catch(err => {
            dispatch({
                type: GET_NAME_FAILURE,
                payload: 'Could not load articles.'
            })
        })
}

export const getChapter = (book, chapter) => dispatch => {
    axios 
        .get(`https://api.scripture.api.bible/v1/bibles/f72b840c855f362c-04/passages/${book}.${chapter}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`, 
            { headers: {
              'api-key': '15031d076b0791b503e9c13b013e5a39'
                }
            })
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CHAPTER, payload: res.data.data.content})
        })
        .catch(err => {
            dispatch({
                type: GET_SCRIPTURE_FAILURE,
                payload: 'Could not load scripture.'
            })
        })
}

export const setLoggedIn = () => dispatch => {

    dispatch({type: SET_LOGGED_IN})

}






