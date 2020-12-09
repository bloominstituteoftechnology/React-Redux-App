import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

import { reducer } from './reducers';

// const store = createStore(reducer, applyMiddleware(thunk));


const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
