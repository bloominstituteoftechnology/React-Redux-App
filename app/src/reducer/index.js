import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS} from '../action'


const initialState = {
    loading: false,
    product: [],
    error: "",

}
export const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                product : action.payload,
                error: ""
            }
        
        default: 
        return state;
    }
}