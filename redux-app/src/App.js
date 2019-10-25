import React, {useEffect} from 'react';
import './App.css';
import Dogs from './components/Tacos'
import { fetchTacoVenues } from "./actions/tacos";
import { connect } from "react-redux";

function App(props) {

  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchTacoVenues();
  }, []);

  return (
    <div className="App">
      <Dogs venues={props.venues} 
            isDogLoading={props.isDogLoading}
            dogError={props.dogError}/>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isDogLoading: state.isLoading,
    venues: state.venues,
    dogError: state.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchTacoVenues
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
