import './App.css';

import SelectSpecies from './components/SelectSpecies';
import Siting from './components/Siting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          App 🐋
        </p>
        <SelectSpecies/>

        <Siting/>
        
      </header>
    </div>
  );
}

export default App;
