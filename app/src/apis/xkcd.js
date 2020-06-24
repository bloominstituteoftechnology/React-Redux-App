import axios from 'axios';

export default axios.create({
  baseURL: 'https://xkcd.com/61/info.0.json'
})