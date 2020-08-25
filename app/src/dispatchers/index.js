import axios from "axios";
import {GET_DOG_LIST} from "../actions/index.js"
//action creator
const getDogList = (payload) => {
    return {type: GET_DOG_LIST, payload}
}
//dispatcher
export const getDogListDispatcher = () => (dispatch) => {
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res =>{
        console.log(res.data.message);
        dispatch(getDogList(res.data.message))
    })
}
