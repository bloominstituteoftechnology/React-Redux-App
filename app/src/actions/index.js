import axios from "axios";

//Asynchronice function build out, thunk
export const fetchDog = () => dispatch => {

    dispatch({ type: 'FETCHING_DATA_START' });
    
    //make API call
    axios.get('https://dog.ceo/api/breeds/image/random')
    // .then(res => console.log(res))
    .then(res => {
        //res.data => activity
        dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: 'SHOW_ERROR', payload: err})
        

    });
};



// const thunk = action => next => store => {
//     if (typeof action === 'function'){
//         action(store.dispatch);
//     } else if (typeof action === 'object') {
//         next(action);
//     }
// };