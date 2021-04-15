import React, { useEffect } from 'react';
import { fetchCountry } from './actions'
import { connect } from "react-redux"
import Header from "./components/Header"
import CountryList from './components/CountryList';
import './app.css';


function App(props) {
  const { fetchCountry, region } = props

  useEffect(() =>{
    fetchCountry(region)
  },[region])

  return (
    <div className="App">
      <Header />
      <CountryList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
      region: state.region
  };
};

export default connect(mapStateToProps, { fetchCountry })(App);

