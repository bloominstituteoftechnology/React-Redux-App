import React from 'react';
import './App.css';
import DataFile from './components/DataFile';
import DisplayFile from './components/DisplayFile';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider }  from "react-redux";
import reducer from "./reducers"
import {Alert} from 'reactstrap'

const store = createStore(reducer,applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <header>
      <Alert color="primary"><h1>Mini Harvard Art Museum</h1></Alert>
        <DataFile />
        <DisplayFile/>
      </header>
      </div>
    </Provider>
  );
}

export default App;
