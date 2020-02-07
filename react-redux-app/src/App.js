import React from 'react';
import './App.css';
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
   
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(App);
