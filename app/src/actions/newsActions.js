import axios from 'axios';
export const FETCH_NEWS = 'FETCH_NEWS'

export const fetchNews = () => dispatch => {
    axios
    .get("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=d4f2acac47034e2d970420468a0b9664")
    .then(res => { 
        //console.log(res.data.articles)
        dispatch({ type: FETCH_NEWS, payload: res.data.articles})
    })
    .catch(err => { console.log("Something went wrong, see error:", err)})
}