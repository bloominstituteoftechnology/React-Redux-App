import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as dogReducer } from "./reducers/Nope"
import './index.css';
import App from './App';
const rootReducer = combineReducers({
    dog: dogReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));