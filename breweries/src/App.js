import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {getBreweries} from './actions/actionIndex'
import Breweries from './components/Breweries'

function App(props) {

  const loadBreweries = () => {
    props.getBreweries();
  }

  console.log('state inside app', props.state)
  return (
    <div className="App">
      <h1 onClick={loadBreweries}>Take a look at all the breweries in your area!</h1>
      <Breweries isFetching={props.isFetching} breweries={props.breweries} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
  breweries: state.breweries,
  state: state,
  isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  {getBreweries}
)(App);
