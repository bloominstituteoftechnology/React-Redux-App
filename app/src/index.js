import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import { jokeReducer } from "./reducers";

import App from './App';

const store = createStore(jokeReducer, applyMiddleware(thunk));

const root = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, root);
