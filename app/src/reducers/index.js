import { FETCHING_IMAGE_START, FETCHING_IMAGE_SUCCESS, FETCHING_IMAGE_FAILURE, FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE } from "../actions/index";
const initialState = {
    loadingImage: false,
    loadingQuote: false,
    errorImage: "",
    errorQuote: "",
    image: "",
    quote: ""
}

export const reducer =  (state = initialState, action) => {
    switch(action.type){
        case(FETCHING_QUOTE_START):
            return ({...state, loadingImage: true});
        case(FETCHING_QUOTE_SUCCESS):
            return ({...state, loadingImage: false, quote: action.payload});
        case(FETCHING_QUOTE_FAILURE):
            return ({...state, loadingImage: false});
        case(FETCHING_IMAGE_START):
            return ({...state, loadingImage: true});
        case(FETCHING_IMAGE_SUCCESS):
            return ({...state, loadingImage: false, image: action.payload});
        case(FETCHING_IMAGE_FAILURE):
            return ({...state, loadingImage: false,});
        default:
            return state;
    }
}