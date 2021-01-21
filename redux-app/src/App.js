import React, {useEffect} from 'react'
import './App.css';
import {getCharacter} from './actions/actions'
import {connect} from 'react-redux'
import CharacterCard from './components/characterCard'



function App(props) {
  useEffect(() => {
    props.getCharacter()
  }, [])

console.log(props.characters)
  return (
    <div className="App">
      <header className='header'>
      <h1>Get Your Rick and Morty Character Here!</h1>
      {props.characters.map(character => <CharacterCard key={character.id} {...character} />)}
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return{
  characters:state.characters,
  isFetching:state.isFetching,
  error:state.error
}
}

export default connect (mapStateToProps, {getCharacter})(App);
