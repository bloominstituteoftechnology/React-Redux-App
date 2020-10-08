import axios from 'axios'

// Asynchronous Action Creator function (Thunks)
export const fetchJobs = (url) => {
   return dispatch => { 
      dispatch({ type: 'FETCH_JOBS_START' })
      axios
         .get(url)
         // we are having a CORS warning and cannot fetch the data, because the data we want to fetch is demanding to fetch the data from server instead from browser.
         // Since we are fetching data from browser, it's blocking. 
         // So that herokuapp.com is fetching a data for us being a server for us.
         .then(res => {
            if(res.data.cards.length === 0){

              dispatch({ type: 'FETCH_JOBS_FAILED', payload: 'Oops! Can\'t find your pokemon!'})
            }
            dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: res.data.cards })
         })
         .catch(err => {

          dispatch({ type: 'FETCH_JOBS_FAILED', payload: ''})
       })
   }
}
// action must be object but currently 'fetchJobs' returning a anonymous function
// which 'jobReducer' won't accept that action as object in switch statement.

// this 'fetchJobs' will return in 'ownThunk' function and receives an argument 'store.dispatch'
// and that 'store.dispatch' will be passed into 'dispatch' parameter and fetch data.


// From index.js file
/*
  const ownThunk = store => next => action => {
    if (typeof action === 'object'){
      next(action)
    } else if (typeof action === 'function'){
      // this means we're trying to do some asynchronous operation
      // DON'T CALL NEXT() to forward to 'reducer'
      // Because it will throw on arrow into 'reducer' since it is not object
      // This is when we STOP the action to forward into 'reducer'
      // Instead of forward into 'reducer' we just call here

      action(store.dispatch)
    }
  }
*/