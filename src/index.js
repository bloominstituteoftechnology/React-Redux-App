import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './store/reducers';

import Jokes from './components/Jokes';

import './styles.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Jokes 😂</h1>
      <Jokes />
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
