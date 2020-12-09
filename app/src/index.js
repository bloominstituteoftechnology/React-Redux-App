import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import AskForm from "./components/AskForm";
import AnswerList from "./components/AnswerList";
import { answerReducer } from './reducers/answerReducer';

const store = createStore(answerReducer);


function App() {

  return(
    <div>
      <h1>ASK ME A YES OR NO QUESTION</h1>
      <AskForm />
      <AnswerList />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

