import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import CovidTracker from './components/CovidTracker';
// Material-ui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './muiTheme';

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CovidTracker />
    </ThemeProvider>
  );
}

export default App;
