import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Landing from './components/Landing';
import LoginHeader from './components/LoginHeader';
import LoginFooter from './components/LoginFooter';
import Login from './components/Login';

import SelectSpecies from './components/SelectSpecies';
import Sightings from './components/Sightings';

function App() {
  const [user, setUser] = useState({}); // empty object user
  return (
      <div className="App">
      
          <LoginHeader/>
          
          <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>

            <Route exact path="/login">
              <Login
                user={user}
                setUser={setUser}
              />
              
            </Route>

        
            <Route path="/species">
              <SelectSpecies/>
              <Sightings/>
            </Route>

          </Switch>
          
          <LoginFooter/>

 
      </div>
  );
}

export default App;
