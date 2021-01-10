import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { pokeReducer } from './store/reducer/pokeReducer' // reducer folder 안에 index.js 에 있는 combineReducer 가 리턴한 object 를 rootReducer 라 칭한다


const store = createStore( pokeReducer, applyMiddleware(thunk) )

console.log(applyMiddleware(thunk))
// thunk make synchronous action into asynchronous.
// FOR a TIP, when you call 'thunk' and 'logger' together, 'logger' must go as second argument.
/*
  const ownThunk = store => next => action => {
    if (typeof action === 'object'){
      next(action)
    } else if (typeof action === 'function'){
      // this means we're trying to do some asynchronous operation
      // DON'T CALL NEXT() to forward to 'reducer'
      // Because it will throw on arrow into 'reducer' since it is not object
      // This is when we STOP the action to forward into 'reducer'
      // Instead of forward into 'reducer' we just call this: 
        
      action(store.dispatch)
    }
  }
*/

// applyMiddleware is helper function that execute the logger or thunk
// and dispatch all action creator and update the state and auto-console.log 
// that 'prev state, next state, and the action creator that I just invoked' 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
