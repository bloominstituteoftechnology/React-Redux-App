import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/';
import './App.css';
import CountryName from './components/CountryName';

const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.state);
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CountryName />
      </div>
    </Provider>
  );
}

export default App;
