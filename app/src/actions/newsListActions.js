import axios from "axios";
export const FETCHING_NEWS_START="FETCHING_NEWS_START";
export const FETCHING_NEWS_SUCCESS="FETCHING_NEWS_SUCCESS";
export const FETCHING_NEWS_ERROR="FETCHING_NEWS_ERROR";
//Action

const headers = {
    Accept: "application/json"
  };
export const getNews=()=>(dispatch)=>
{
console.log("NEWS ACTION");
dispatch(
    {
        type:FETCHING_NEWS_START
    });
axios
.get("https://icanhazdadjoke.com/", { headers: headers })
.then((res)=>{
    console.log("resukt",res.data.joke);
    dispatch({
        type:FETCHING_NEWS_SUCCESS,
        payload:res.data.joke
    });
})
.catch((err)=>{
    dispatch({
        type:FETCHING_NEWS_ERROR,
        payload: `${err.response.message} code: ${err.response.code}`
    });
    console.log("error",err);
})

};