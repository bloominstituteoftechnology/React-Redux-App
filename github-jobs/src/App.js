import React from 'react';
import './App.css';

import JobList from './components/JobList';

function App() {
  return (
    <div className="App">
      <h1>Github Jobs</h1>
      <JobList />
    </div>
  );
}

export default App;
