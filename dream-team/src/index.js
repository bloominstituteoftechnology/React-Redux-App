import React from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/players'
import './index.css';
import App from './App';

// const allReducers = combineReducers({
// 	reducer
// })

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

