import React, { useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import { connect } from 'react-redux';
import { fetchCases } from './actions/casesAction'

function App(props) {
      useEffect(() => {
        props.fetchCases()

      },[])



  return (
    <div className="App">
      <h1>Corona Virus Global Data</h1>
      <div className ='cardContainer'>
      <div className = 'infected'>
      <Card title = {'Infected'} description = {'active cases'} cases = {props.confirmedCases} date = {props.date} />
      </div>
      <div className = 'recovered'>
      <Card className = 'card recovered' title = {'Recovered'} description = {'recoveries'} cases = {props.recoveredCases} date = {props.date} />
      </div>
      <div className = 'deaths'>
        <Card className = 'card deaths' title = {'Deaths'} description = {'deaths'} cases = {props.deaths} date = {props.date} />
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    confirmedCases: state.cardReducer.confirmedCases,
    recoveredCases: state.cardReducer.recoveredCases,
    deaths: state.cardReducer.deaths,
    isFetching: state.cardReducer.isFetching,
    date: state.cardReducer.date,
    error: state.cardReducer.error
  }
}

export default connect(mapStateToProps, {fetchCases})(App);
