import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { kittyReducer } from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store = createStore(kittyReducer, applyMiddleware(thunk, logger))

ReactDOM.render
(<Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
