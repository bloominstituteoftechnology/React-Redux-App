import axios from 'axios';
import {ranDino, dinosaurList, randomDinoIndex, getRandomInt} from '../dinoRandomizer';
import { bindActionCreators } from 'redux';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";



export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    setTimeout(() => {

        let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${ranDino(dinosaurList, randomDinoIndex())}`;
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.get(proxyurl + url)
        .then(res => {
            console.log(res)
            const pageID = Object.keys(res.data.query.pages)
            let pageIDString = pageID.toString();
            const dinoName = res.data.query.pages[pageIDString].title;
            const dinoText = res.data.query.pages[pageIDString].extract;
            const dinoInfo = {
                name: dinoName,
                text: dinoText,
                url: `https://en.wikipedia.org/wiki/${dinoName}`
            }
            console.log(dinoInfo)
            dispatch({ type: DATA_SUCCESS, payload: dinoInfo })
        })
        .catch(err => dispatch({ type: DATA_ERROR, payload: err}))
        
    }, 10)
}