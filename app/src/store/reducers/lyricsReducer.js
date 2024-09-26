const initialState = {
    lyric: '',
    isFetching: false,
    error: ''
}

export const lyricsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            case "FETCH_LYRIC_START":
                return {
                    ...state,
                    isFetching: true
                }
            case "FETCH_LYRIC_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    lyric: action.payload,
                    error: ''
                }
            return state;
    }
}