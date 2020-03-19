import axios from "axios";

//Asynchronice function build out
export const fetchActivity = () => dispatch => {

    dispatch({ type: 'FERCHING_ACTIVITY_START' });
    
    //make API call
    axios.get('https://dog.ceo/api/breeds/image/random')
    // .then(res => console.log(res))
    .then(res => {
        //res.data => activity
        dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data})
    })
    .catch(err => console.log(err));
};


// const thunk = action => next => store => {
//     if (typeof action === 'function'){
//         action(store.dispatch);
//     } else if (typeof action === 'object') {
//         next(action);
//     }
// };