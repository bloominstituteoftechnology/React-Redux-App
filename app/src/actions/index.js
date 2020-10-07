

//set up action objects

// fetchFoxes
export const FETCH_FOXES_START = "FETCH_FOXES_START"

export const fetchFoxes = () => () => {
    dispatchEvent({ type: FETCH_FOXES_START})
}