import { FETCH_FILMS, FETCH_START, FETCH_ERROR } from '../actions/getFilms'

const initalState ={
    films: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initalState, action) =>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }
            case FETCH_FILMS:
                return{
                    ...state,
                    films: action.payload,
                    isFetching: false
                }


    }

}