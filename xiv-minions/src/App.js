import React from 'react';
import { Route } from 'react-router-dom';

import MinionPage from './components/MinionPage';
import MinionList from './components/MinionList';

function App() {
  return (
    <div className='App'>      
      <h1>FFXIV Minions</h1>
      <Route exact path='/'>   
        <MinionList />
      </Route>
      <Route path='/:id'>
        <MinionPage />
      </Route>
    </div>
  );
}

export default App;
