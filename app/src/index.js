import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AskForm from "./components/AskForm";
import { answerReducer } from './reducers/answerReducer';

const store = createStore(answerReducer, applyMiddleware(thunk));


function App() {

  return(
    <div>
      <h1>ASK ME A YES OR NO QUESTION</h1>
      <AskForm />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

