import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from './Header';
import Jokes from './containers/Jokes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Jokes />
    </ThemeProvider>
  );
}

export default App;
