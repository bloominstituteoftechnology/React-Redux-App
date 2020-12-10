import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AskForm from "./components/AskForm";
import { answerReducer } from './reducers/answerReducer';
import './styles.css'

const store = createStore(answerReducer, applyMiddleware(thunk));


function App() {

  return(
    <div className="app">
      <h1>ASK ME A YES OR NO QUESTION</h1>
      <AskForm />
      <img src="https://images.unsplash.com/photo-1505358131519-deb04e8e7ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"></img>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

