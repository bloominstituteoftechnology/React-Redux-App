import {GET_DOG_LIST} from "../actions"
const initialState = {dogList: []};
//reducers
function reducer (state = initialState, action) {
    switch(action.type){
        case GET_DOG_LIST:
            return {...state, dogList: action.payload}
            default:
                 return state;

    }

}
export default reducer;