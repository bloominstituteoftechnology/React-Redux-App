export const SEARCH_TERM = "SEARCH_TERM"

export const searchFeature = searchTerm => {
    console.log(searchTerm)
    return {
        type: SEARCH_TERM,
        payload: searchTerm
    }
}

