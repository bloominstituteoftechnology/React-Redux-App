import React from 'react';
import FoodPhoto from './components/FoodPhoto';
import './App.css';
import styled from 'styled-components';
const StyledApp = styled.div`
h2{
  text-align:center;
  margin-top:10%;
}

`
function App() {
  return (
    <StyledApp>
      <h2>Random Food Photo Generator (REDUX)</h2>
      <FoodPhoto />
    </StyledApp>
  );
}

export default App;
