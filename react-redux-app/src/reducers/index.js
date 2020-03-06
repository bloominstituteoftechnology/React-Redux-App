
const initialState = {
    loading: false,
    anime: [],
    watchlist: [
        { id: 1, name: 'Tokyo Goul', director: "somebody" },
    ]
};
  
export const reducer = (state = initialState, action) => { 
    switch (action.type) {
      case 'ADD_WATCH':
        return {
            ...state,
                watched: true,
                watchlist: [
                    ...state.watchlist, action.payload]
        }
  
      case 'REMOVE_WATCH':
        return {
            watched: false,
            watchlist: [
                ...state.watchlist.filter(anime => anime.title !== action.payload)
            ]
        }

        case 'FETCH_ANIME_REQUEST':
        return {
            ...state,
            loading: true
        }

        case 'FETCH_ANIME_SUCCESS':
        return {
            ...state,
            loading: false,
            anime: action.payload,
            error: ''
        }

        case 'FETCH_ANIME_FAILURE':
        return {
            loading: false,
            error: action.payload,
        }
      default: 
        return state
    }
  }

