import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { reducer as titleReducer } from './reducer/title';
import axios from 'axios';
import './index.css';
import './styles.css';
import App from './App';


const store = createStore(applyMiddleware(logger));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')
);

