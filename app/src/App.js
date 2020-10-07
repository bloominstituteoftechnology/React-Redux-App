import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getInsult } from "./actions/index";

export default function App(props) {
  const { getInsult } = props;
  
  return (
    <div className ="App">
      {error ? props.error : null}
      <h1>The Insults Continue</h1>
      <InsultList/>
      {props.insults.map((insult) => (
        <h1 key={insult.number}>{insult.insult}</h1>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    insults: state.insults
  };
};

export default connect(null, { getInsult })(App);
