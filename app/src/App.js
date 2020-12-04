import React from 'react';
import Quote from './components/Quote'
import './index.css'

function url(path) {
  return process.env.NODE_ENV === 'development'
  ? `'http://localhost:5000${path}`
  : path
}

export default function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}
