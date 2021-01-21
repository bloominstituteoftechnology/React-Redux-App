import './App.css';
import React, { useEffect } from 'react';
import  {getCharacter} from './actions/actions'
import Card from './components/Card'
import {connect} from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getCharacter();
}, []);

console.log(props.characters);
  return (
    <div className="App">
      <header className="App-header">
          <h1>Rick and Morty Characters</h1>
          {props.characters.map(character => <Card key={character.id} {...character}/>)}
      </header>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error
  }
}
export default connect(mapStateToProps, {getCharacter})(App);
