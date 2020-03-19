import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import CovidTracker from './components/CovidTracker';

function App() {
  return ( 
    <Fragment>
      <CssBaseline />
      <CovidTracker />
    </Fragment>
  );
}

export default App;
