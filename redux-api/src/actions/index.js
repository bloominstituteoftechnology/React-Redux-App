import axios from 'axios';
export const FETCH_CAT = ' FETCH_CAT'
export const FETCH_CAT_SUCCESS = ' FETCH_CAT_SUCCESS'
export const FETCH_CAT_FAILURE = ' FETCH_CAT_FAILURE'

export const ADD_CAT = 'ADD_CAT'
export const ADD_CAT_SUCCESS = 'ADD_CAT_SUCCESS'
export const ADD_CAT_FAILURE= 'ADD_CAT_FAILURE'



export const fetchCats = ()=> {
    const promise = axios.get ('https://dog.ceo/api/breed/hound/list');
    return dispatch => {
        dispatch({type: FETCH_CAT});
        promise 
        .then(res => {
            console.log('RES==>',res)
            dispatch({type: FETCH_CAT_SUCCESS, payload: res.data.message})
        })
        .catch(err=> {
            console.log(err);
            dispatch({type: FETCH_CAT_FAILURE});
        })
    }
}

// export const fetchCats = () => {
//     return function(dispatch){
//         dispatch({type: FETCH_CAT});
//         setTimeout(()=> {
//             axios.get('https://dog.ceo/api/breeds/image/random'

//             )
//             .then(res => {
//                 console.log(res);
//                 dispatch({type: FETCH_CAT_SUCCESS, payload:res.data})
//             })
//             .catch(err => {
//                 console.log(
//                   "bk: actions/index.js: fetchRandomTaco: axios: catch: err",
//                   err
//                 );
//                 dispatch({
//                   type: FETCH_CAT_FAILURE,
//                   payload: err.message + " fetching cat data!"
//                 });
//         })
//     },2000);
// };
// }

