

//set up action objects

// fetchComic
export const FETCH_COMIC_START = "FETCH_COMIC_START"

export const fetchComic = () => () => {
    dispatchEvent({ type: FETCH_COMIC_START})
}