import React from 'react';
import './App.css';
import BeerButton from './components/BeerButton';
import { createStore, applyMiddleware } from 'redux';
import { beerReducer as reducer} from './reducers/beerReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BeerList from './components/BeerList';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>BEER List</h1>
        <BeerButton />
        <BeerList />
      </div>
    </Provider>
  );
}

