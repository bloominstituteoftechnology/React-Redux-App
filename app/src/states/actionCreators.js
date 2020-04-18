import axios from 'axios';
import * as types from './actionTypes';

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb";

export function increment() {
    return {
        type:types.INCREMENT
    }
};

export function decrement() {
    return {
        type:types.DECREMENT
    }
};

export function reset() {
    return {
        type:types.RESET
    }
}

export function setNAPOD(data) {
    console.log(data);
    return {
        type:types.NASAPOD,
        payload: data
    }
}

export const getNasaAPI = () => dispatch => {
    axios.get(nasaApi)
    .then(response => {
        // debugger
        const data = response.data;
        console.log(response)
        dispatch(setNAPOD(data));
    })
    .catch( error => {
        // debugger
    })
}