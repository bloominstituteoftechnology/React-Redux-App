import {CHECK_AWN_CORRECT,CHECK_AWN_WRONG} from '../actions'
const initialState = {
    right: 0,
    wrong: 0,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_AWN_CORRECT:{
            return {
                ...state,
                right: state.right + 1
            }
        };
        case CHECK_AWN_WRONG:{
            return{
                ...state,
                wrong: state.wrong + 1
            }
        };
        default:
            return state;
    };

}

export default userReducer;