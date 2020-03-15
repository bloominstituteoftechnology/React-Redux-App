import React from "react";
import { connect } from "react-redux";
import { getBooster, clickBooster, resetBooster } from "./actions";

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
      <Nav clicked={props.clicked} resetBooster={props.resetBooster} />
      <Route exact path="/">
        <Main resetBooster={props.resetBooster} />
      </Route>
      <Route exact path="/throne_of_eldraine">
        <Eldraine
          cards={props.cards}
          isFetching={props.isFetching}
          error={props.error}
          getBooster={props.getBooster}
          clicked={props.clicked}
          clickBooster={props.clickBooster}
        />
      </Route>
      <Route exact path="/war_of_the_spark">
        <War
          cards={props.cards}
          isFetching={props.isFetching}
          error={props.error}
          getBooster={props.getBooster}
          clicked={props.clicked}
          clickBooster={props.clickBooster}
        />
      </Route>
      <Route exact path="/modern_horizons">
        <Modern
          cards={props.cards}
          isFetching={props.isFetching}
          error={props.error}
          getBooster={props.getBooster}
          clicked={props.clicked}
          clickBooster={props.clickBooster}
        />
      </Route>
      <Route exact path="/ravnica_allegiance">
        <Ravnica
          cards={props.cards}
          isFetching={props.isFetching}
          error={props.error}
          getBooster={props.getBooster}
          clicked={props.clicked}
          clickBooster={props.clickBooster}
        />
      </Route>
    </>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  isFetching: state.isFetching,
  clicked: state.clicked
});

export default connect(mapStateToProps, {
  getBooster,
  clickBooster: clickBooster,
  resetBooster: resetBooster
})(App);
