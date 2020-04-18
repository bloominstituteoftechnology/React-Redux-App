import React from 'react';
import Counter from './components/Counter';
import NasaPod from './components/NasaPod';
import styled from 'styled-components';

import './App.css';

const Body = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function App() {
  return (
    <Body>
      {/* <h1>NASA PHOTO OF THE DAY</h1> */
      <Counter/> }
      <NasaPod />
      
    </Body>
  );
}

export default App;