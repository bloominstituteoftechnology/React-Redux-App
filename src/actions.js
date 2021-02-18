import axios from "axios"
export const FETCH_CHARS_LOADING = "FETCH_CHARS_LOADING";
export const CHAR_FETCH_SUCCESS = "CHAR_FETCH_SUCCESS";
export const CHAR_FETCH_ERROR = "CHAR_FETCH_ERROR";

const charIds = [309, 70, 522, 165, 370, 720, 263, 298,545,73,60,561];


export const fetchChars =() => {
   
    return async dispatch => {
        dispatch({ type: FETCH_CHARS_LOADING });
        const allChars = await  Promise.all( charIds.map((id) => {
            return axios.get(`https://www.superheroapi.com/api.php/428965754828142/${id}`)
                .then(res => {
                    const { appearance, name, image, work, connections } = res.data
                    return { appearance, name, image, work, connections }
                })
         }))
        
        dispatch({type: CHAR_FETCH_SUCCESS, payload: allChars})
        
    };
}; 
   







