import React from 'react';
// import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Title from './components/Title';
import { connect } from 'react-redux';



function App() {
  return (
    <div className= "Index">
      <Title />
      <News />
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return
    {}
  
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
