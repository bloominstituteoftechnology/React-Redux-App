import { FETCH_DOGS_START,FETCH_DOGS_SUCCESS } from "../actions/actions"



const initalState = {
isLoading: false,
dogData : [],
error: ""

}

export const dogReducer = (state = initalState,action) =>{
    switch(action.type){
        case FETCH_DOGS_START:
                return{
                    ...state,
                    isLoading:true,
                    error:""
                }
        case FETCH_DOGS_SUCCESS:
                return{
                    ...state,
                    isLoading:false.error,
                    dogData:action.payload
                }
            default:
                return state



    }
}