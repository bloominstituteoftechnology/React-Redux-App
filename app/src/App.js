import React from 'react';
import DataList from "./components/dataList";
import {connect} from "react-redux";
import {fetchData} from "./actions/actions";
import { Spinner } from 'reactstrap';
import './App.css';

function App(props) {

  const fetchStarWars = e => {
    e.preventDefault();
    props.fetchData();
  };

  console.log("app props",props)

  return (
    <div className="App">
      <h1>Stars wars api characters</h1>
      <button onClick={fetchStarWars}>Get swapi things</button>
      <div className="data-list-wrapper">
        {props.isFetching ? <Spinner color="success"></Spinner>: 
          props.error ? <p>Error {props.error}</p> : 
          <DataList data={props.data}></DataList>}
      </div>
        
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps, 
  {fetchData}
)(App);

