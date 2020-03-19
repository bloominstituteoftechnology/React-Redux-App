import React from 'react';
import {reducer} from './reducer/reducer'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppForm from './components/appForm'
import CountryList from './components/countryList';
import './App.css';

const store = createStore(reducer, applyMiddleware(thunk))


function App() {
  return (
    <div >
      <Provider store={store}>
      <AppForm/>
      <CountryList/>
      </Provider>
    </div>
  );
}

export default App;
