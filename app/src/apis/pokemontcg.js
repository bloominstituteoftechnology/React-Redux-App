import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/cards'
});