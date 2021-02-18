import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import {reducer} from "./reducer"
import {createStore, applyMiddleware  } from "redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunk,logger));


const rootElement = document.getElementById('root');

ReactDOM.render(
 <Provider store ={store}>
    <App />
</Provider>,
 rootElement
);

