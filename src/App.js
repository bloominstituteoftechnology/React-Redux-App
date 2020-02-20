import React from 'react';
import './App.css';
import Form from './components/Form';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import List from './components/List';


const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return(
    <Provider store ={store}>
      <div className='App'>
        <h1>My Mission Page</h1>
        <Form />
        <List />
      </div>
    </Provider>
  );
}
