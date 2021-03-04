import './App.css';

import SelectSpecies from './components/SelectSpecies';
import Sightings from './components/Sightings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          App 🐋
        </p>
        <SelectSpecies/>

        <Sightings/>
        
      </header>
    </div>
  );
}

export default App;
