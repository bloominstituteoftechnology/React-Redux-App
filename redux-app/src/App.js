import React, {useEffect, useState} from 'react';
import './App.css';
import Tacos from './components/Tacos'
import { fetchTacoVenues, updateLocation } from "./actions/tacos";
import { connect } from "react-redux";

function App(props) {


  const [newLocation, setNewLocation] = useState("Lansing");
  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchTacoVenues(newLocation);
  }, []);

  
  const handleChanges = e => {
    setNewLocation(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewLocation("");
    props.updateLocation(newLocation || props.location);
    props.fetchTacoVenues(newLocation)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newLocation"
            placeholder={props.location}
            value={newLocation}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>

      <Tacos venues={props.venues} 
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
  fetchTacoVenues,
  updateLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
