import React from 'react';
import './App.css';


import QuotesForm from './components/QuotesForm';
import QuotesList from './components/QuotesList';

function App() {
  return (
    <div className="App">
      <h1>Famous Quotes</h1>
      <QuotesForm />
     <QuotesList />
    </div>
  );
}

export default App;