import './App.css';
import React, { useEffect } from 'react';
import  {getCharacter} from './actions/actions'
import CharCard from './components/CharCard'
import {connect} from 'react-redux';
import styled from 'styled-components'

const StyledHeader = styled.h1`
@import url("./index_files/get-shwifty.ttf");

    @font-face{
    font-family: Get Schwifty;
    src:'./index_files/get-shwifty.ttf';

    h1 {
      font-family: Get Schwifty;
    }

`

function App(props) {
  useEffect(() => {
    props.getCharacter();
}, []);

console.log(props.characters);
  return (
    <div className="App">
      <header className="App-header">
          <StyledHeader>Rick and Morty Characters</StyledHeader>
          {props.characters.map(character => <CharCard key={character.id} {...character}/>)}
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
