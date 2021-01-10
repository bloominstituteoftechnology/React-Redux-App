import axios from 'axios'

// Asynchronous Action Creator function (Thunks)
export const fetchJobs = url =>  
/* starting from here, the thunk function will receive either anonymous function or action object. 
currently it will receive anonymous object */
  dispatch => { 
    dispatch({ type: 'FETCH_JOBS_START' })
    axios
        .get(url)
        // we are having a CORS warning and cannot fetch the data, because the data we want to fetch is demanding to fetch the data from server instead from browser.
        // Since we are fetching data from browser, it's blocking. 
        // So that herokuapp.com is fetching a data being a server for us.
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


// this 'fetchJobs' will return in 'ownThunk' function (dispatch => .....)
// because we did 'applyMiddleware(thunk)' so this 'fetchJobs' function must return 'thunk' function,
// and receives an argument 'store.dispatch'
// and that 'store.dispatch' will be passed into 'dispatch' parameter and fetch data.


// Thunk Function
/*

  function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

// Thunk function 은 쉽게 말해서 dispatch() 와 reducer 사이에 개입하는 역할을 한다.
// 즉, action object 를 곧바로 dispatch() argument 로 보내기전에,
// 'fetchJobs()'를 실행하여 'fetchJob()' 가 return 한 값이 object 이면
// 바로 next 요소가 될 reducer 에게 바로 보내어 next(action) 을 실행하여 state 을 update 하고,
// 만약 return 한 값이 function 일 경우,
// thunk() 의 extraArgument 로 보내어지고,
// extraArgument 로 보내어진 function 안에 axios 를 먼저 실행하여
// 정상적으로 data 를 fetch 가 되었을 경우,
// .then 에서 dispatch() 를 실행하여 reducer() 를 실행하게 한다.
// 만약 data 가 정상적으로 fetch 가 안되었을경우, 
// dispatch() 를 하지 않고, .error 를 실행한다.

// 여기서 중요한건 thunk() 가 axios 의 .then 과 .error 를 통해 dispatch 사용에 관하여 조절이 가능하다는 것.

*/