import React, { useEffect } from 'react';
import { fetchData } from "./actions";
import './App.css';
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div class = "container">
      <header>
        <h1>Federations MOST WANTED</h1>
      </header>
      <main>
          <div class = "char">
            <img src = {props.most_wanted.img} alt = "the Galactic federations most wanted." />
            <h3>{props.most_wanted.name}</h3>
          </div>
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    most_wanted:state.most_wanted
  }
}

export default connect(mapStateToProps, { fetchData })(App);
