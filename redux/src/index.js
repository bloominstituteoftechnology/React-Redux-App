import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter as Router} from 'react-router-dom'

import {reducer} from './reducers'
import './index.css';
import App from './App';



const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store = {store}>
<Router>
<App />
</Router>
</Provider>, 

document.getElementById('root'));


