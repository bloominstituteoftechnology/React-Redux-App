import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA'

export const fetchNews = () => dispatch => {
    axios.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=d4f2acac47034e2d970420468a0b9664')
    .then(res => { console.log(res)})
    .catch(err => { console.error("Something went wrong, see error:", err)})
}