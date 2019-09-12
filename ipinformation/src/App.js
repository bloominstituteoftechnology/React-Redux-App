import React from 'react';
import './App.css';

import IpInformation from './components/IpInformation';

function App() {
  return (
    <div className="App">
      <h3>
        GeoLocation Information Found Through Your Public IP Address
      </h3>
      <IpInformation />
    </div>
  );
}

export default App;
