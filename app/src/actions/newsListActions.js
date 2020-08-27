import axios from "axios";
export const FETCHING_NEWS_START="FETCHING_NEWS_START";
export const FETCHING_NEWS_SUCCESS="FETCHING_NEWS_SUCCESS";
export const FETCHING_NEWS_ERROR="FETCHING_NEWS_ERROR";



export const getNews=()=>(dispatch)=>
{
console.log("NEWS ACTION");
dispatch({FETCHING_NEWS_START});
axios
.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1777d02ca51402db5eaf53c72cc0666")
.then((res)=>{
    console.log("resukt",res);
})
.catch((err)=>{
    dispatch({
        type:FETCHING_NEWS_ERROR
    })
    console.log("error",err);
})

}