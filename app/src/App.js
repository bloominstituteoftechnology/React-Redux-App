import React from 'react';

import './App.css';
import Characters from './components/Characters';

import styled from 'styled-components';

const Background = styled.div`
background: url('https://aeither.net/wp-content/uploads/2017/06/5.jpg') ;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
color: yellow;
`;

const Title = styled.h1`
background-color:black;
width: 15%;
margin: auto;
`;

function App() {
  return (
    <Background className="App">
      <Title>Star War Characters</Title>
      <Characters />
    </Background>
  );
}

export default App;
