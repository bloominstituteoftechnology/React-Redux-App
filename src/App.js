import React from 'react';
import './App.css';


import QuotesForm from './components/QuotesForm';
import QuotesList from './components/QuotesList';

import { createStore, applyMiddleware } from "redux";
import { quotesReducer as reducer} from "./reducers/quoteReducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Famous Quotes</h1>
        <QuotesForm />
        <QuotesList />
      </div>
    </Provider>
  );
}

export default App;