import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import styled from 'styled-components';

const Heading = styled.h1`
  color: white;
`;

const PlayerContainer = styled.div`
  background: transparent;
`;

function App() {
  return (
    <div className="App">
      <PlayerContainer>
        <Heading>NBA Player Information</Heading>
        <PlayerCard />
      </PlayerContainer>
    </div>
  );
}

export default App;
