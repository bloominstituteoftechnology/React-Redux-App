import React from 'react';
import { connect } from 'react-redux';
import { jokeLoader } from "../actions/jokeActions"


function JokeDispenser(props) {
    console.log(props)
  return (
    <div className="joke-Component">
      <p>Joke Dispenser</p>
     <button onClick={props.jokeLoader.setup} className="joke-btn">New Joke</button>
     {!props.activity && !props.loadingFunny}
  <p>{props.jokeLoader.setup}</p>
     <button onClick={props.jokeLoader.punchline} className="punch-btn">Punchline!</button>
     <p>Answer:{props.jokeLoader.punchline}</p>
      <h1>FUNNNNNNYYYYY JOOOOOKEEEE!</h1>
      {/* <img className= "arin-yoda" src="https://i.ytimg.com/vi/BvJ0CltLrMk/maxresdefault.jpg" /> */}
    </div>
  );
}

const mapStateToProps = state => {
    return {
      loadingFunny: state.isLoading,
      activity: state.activity,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { jokeLoader }
  )(JokeDispenser);
  