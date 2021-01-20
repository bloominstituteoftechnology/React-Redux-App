import React from "react";
import "./App.css";
import GrabCharacters from "./components/grabCharacters";
import styled from 'styled-components';
const StyledDiv = styled.div`
  text-align: center;
`
function App() {
  return (
    <StyledDiv>
      <h2>Rick and Morty App</h2>
      <GrabCharacters />
    </StyledDiv>
  );
}

export default App;
