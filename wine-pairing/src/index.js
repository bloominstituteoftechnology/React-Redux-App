import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import './index.css';

// import
import App from './App';
import  { reducer }  from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));



ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
