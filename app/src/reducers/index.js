import {IS_LOADING,DATA_LOAD_SUCCESS,DATA_LOAD_ERROR} from "../actions"


const initialState = {
    is_fetching: false,
    items: [],
    error: ""
}

const reducer = (state=initialState, action) => {
    return state
}


export default reducer

