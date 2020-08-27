import {FETCHING_NEWS_START,FETCHING_NEWS_SUCCESS,FETCHING_NEWS_ERROR} from "./actions/newsListActions";
const initialState={
    news:"",
    isFetching:false,
    error:""
}

export const newsListReducer=(state=initialState,action)=>{
switch(action.type){
    case FETCHING_NEWS_START:
        console.log("Fetching New Start");
        return{
            ...state,isFetching:true
        }
     case FETCHING_NEWS_SUCCESS:
         console.log("Fetching News Success");
         return{
             ...state, news:action.payload, isFetching:false
         } 
    case FETCHING_NEWS_ERROR:
        console.log("Fetching Errr");
        return{
            ...state,isFetching:false,error:action.payload
        } 
        default:
            return state      
}
};