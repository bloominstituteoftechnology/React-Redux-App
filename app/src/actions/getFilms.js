import axios from 'react'

export const FETCH_FILMS = 'FETCH_FILMS'
export const FETCH_START = 'FETCH_START'
export const FETCH_ERROR = 'FETCH_ERROR'

export const getFilms = () => (dispatch)=> {
axios
.get('https://ghibliapi.herokuapp.com/films')
.then( res => {
   dispatch({type: FETCH_FILMS, payload: res.data })
})
.catch(err =>{ 
dispatch({type: FETCH_ERROR, paylod: {err}},
    console.log(err))})
}