import React, { useEffect } from 'react';
import { fetchCountry } from './actions'
import { connect } from "react-redux"
import Header from "./components/Header"
import CountryList from './components/CountryList';
import './app.css';


function App(props) {
  const { fetchCountry } = props

  useEffect(() =>{
    fetchCountry()
  })

  return (
    <div className="App">
      <Header />
      <CountryList />
    </div>
  );
}

export default connect(null, { fetchCountry })(App);

