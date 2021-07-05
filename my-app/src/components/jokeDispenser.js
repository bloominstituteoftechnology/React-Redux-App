import React from "react";
import { connect } from "react-redux";
import { jokeLoader } from "../actions/jokeActions";

function JokeDispenser(props) {
  console.log(props);
  return (
    <div className="joke-Component">
      <p>Joke Dispenser</p>
      <button onClick={props.jokeLoader} className="joke-btn">
        New Joke
      </button>
      <p>Setup: {props.setup}</p>

      <button className="punch-btn">Punchline!</button>
      {/* <p>Answer:{props.punchline}</p> */}

      {/* <img className= "arin-yoda" src="https://i.ytimg.com/vi/BvJ0CltLrMk/maxresdefault.jpg" /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loadingFunny: state.loadingFunny,
    activity: state.activity,
    setup: state.setup,
    // punchline: state.punchline,
    error: state.error
  };
};

export default connect(mapStateToProps, { jokeLoader })(JokeDispenser);
