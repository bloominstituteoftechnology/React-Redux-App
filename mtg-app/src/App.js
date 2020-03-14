import React from "react";
import { connect } from "react-redux";
import { getBooster } from "./actions";

import "./App.css";

import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Eldraine from "./components/Eld";
import Ravnica from "./components/Rna";
import Modern from "./components/Modern";
import War from "./components/War";

function App(props) {
  console.log(props.cards);
  return (
    <>
      <Nav />
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/throne_of_eldraine">
        <Eldraine
          cards={props.cards}
          isFetching={props.isFetching}
          error={props.error}
          getBooster={props.getBooster}
        />
      </Route>
      <Route exact path="/war_of_the_spark">
        <War />
      </Route>
      <Route exact path="/modern_horizons">
        <Modern />
      </Route>
      <Route exact path="/ravnica_allegiance">
        <Ravnica />
      </Route>
    </>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getBooster })(App);
