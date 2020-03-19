import React from 'react';
import './App.css';
import Form from "./components/form";
import Quote from "./components/quote";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Reducerstate } from "./reducer/reducer";

const store = createStore(Reducerstate, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <h1>Need A Random Quote?</h1>
  <Form/>
  <Quote/>
    </div>
   </Provider>
  );
}

export default App;
