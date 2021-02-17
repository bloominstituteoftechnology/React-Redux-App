import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions';

const initialState = {
    title: '',
    episodes: '',
    image: '',
    score: '',
    synopsis: '',
    rating: '',
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_DATA_LOADING):
            return ({
                ...state,
                isFetching: true,
            })
        case (FETCH_DATA_SUCCESS):
            return ({
                ...state,
                title: action.payload.title,
                episodes: action.payload.episodes,
                image: action.payload.image,
                score: action.payload.score,
                synopsis: action.payload.synopsis,
                rating: action.payload.rating,
                isFetching: false,
            })
        case (FETCH_DATA_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false,
            })
        default:
            return state
    }
}