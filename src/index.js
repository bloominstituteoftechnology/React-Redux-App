import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import PokemonList from './components/PokemonList';
import './styles.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
