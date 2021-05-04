import { GET_FIVE, GET_TOTAL, SET_ERROR, ADD_COMIC, NOT_WAITING, REMOVE_COMIC } from "../actions/appActions";

const initialState = {
    comics: [],
    waiting: "",
    error: "",
    test: "Testing"
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOTAL:
            return {
                ...state,
                waiting: "Checking latest comic..."
            };
        case GET_FIVE:
            return {
                ...state,
                waiting: "Getting another 5 comics..."
            }
        case SET_ERROR: // Payload is error message
            return {
                ...state,
                waiting: "",
                error: action.payload
            }
        case NOT_WAITING:
            return {
                ...state,
                waiting: ""
            }
        case ADD_COMIC: // Adds comic info object from payload (payload is JSON object for comic)
            console.log("Adding: ", action.payload);
            console.log("Current: ", state.comics);
            return {
                ...state,
                comics: [...state.comics, action.payload]
            }
        case REMOVE_COMIC: // Removes comic with "num" property indicated in payload (payload is comic number)
            return {
                ...state,
                comics: state.comics.filter(item => (item.num !== action.payload))
            }
        default: return state;
    }
}