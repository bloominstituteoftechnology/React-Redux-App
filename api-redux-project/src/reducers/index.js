import {IS_LOADING,DATA_LOADED,DATA_ERROR} from '../actions/index'

const initialState = {
    jokes: [],
    isLoading: false,
    error: ""
}
//https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations


const Reducer = (state=initialState,action) =>{
    console.log('ol: reducers: index.js : state,action',state,action)

    switch(action.type){
        case IS_LOADING:
            return {
                isLoading:true,
            }
        case DATA_LOADED:
            return {
                jokes: action.payload,
                isLoading:false,
            }
        case DATA_ERROR:
            return {
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}


export default Reducer;