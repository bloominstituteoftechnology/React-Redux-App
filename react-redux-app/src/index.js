import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reducer } from "./reducers/index"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddlewear from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddlewear));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


