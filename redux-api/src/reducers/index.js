import {
    FETCH_CAT,
    FETCH_CAT_SUCCESS,
    FETCH_CAT_FAILURE,
    // ADD_CAT,
    // ADD_CAT_SUCCESS,
    // ADD_CAT_FAILURE
} from '../actions'


const initialState ={
cats:[],
fetchingCats: false,
error:null
}

const rootReducer =(state = initialState, action)=>{
    switch(action.type){
        case FETCH_CAT: {
            return Object.assign({}, state, {fetchingCats: true});
        }
        case FETCH_CAT_SUCCESS:{
            return Object.assign({}, state, {
                cats:[...state.cats, ...action.payload],
                fetchingCats: false
            })
        }
        case FETCH_CAT_FAILURE:{
            return Object.assign({},state, {
                fetchingCats:false,
                error: 'ERROR fetching cats'
            })
        }
    }
}

export default rootReducer