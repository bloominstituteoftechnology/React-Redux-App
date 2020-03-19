import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

import CatsList from './components/CatsList';
import CatBox from './components/CatBox';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h2>Cats</h2>
				<CatsList />
				<CatBox />
			</div>
		</Provider>
	);
}

export default App;
