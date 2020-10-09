import React from 'react';
import PokemonCardList from './components/PokemonCardList';
import PokemonCardSearch from './components/PokemonCardSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonCardSearch />
      <PokemonCardList />
    </div>
  );
}
export default App;
