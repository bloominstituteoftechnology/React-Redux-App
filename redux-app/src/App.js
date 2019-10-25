import React, {useEffect, useState} from 'react';
import './App.css';
import Tacos from './components/Tacos'
import { fetchTacoVenues, updateLocation, updateType } from "./actions/tacos";
import { connect } from "react-redux";

function App(props) {


  const [newLocation, setNewLocation] = useState("Lansing");
  const [newType, setNewType] = useState("Tacos");

  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchTacoVenues(newLocation, newType);
  }, []);

  useEffect(()=>{
    props.fetchTacoVenues(newLocation, newType)
  },[newType])



  
  const handleInputChanges = e => {
    setNewLocation(e.target.value);
  };


  //Ask Skylar if there is a way to 
  const handleSelectChanges = e => {
    setNewType(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // setNewLocation("");
    props.updateLocation(newLocation || props.location);
    props.fetchTacoVenues(newLocation, newType)
  };
console.log("newType", newType)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newLocation"
            // placeholder={props.location} 
            placeholder="city"
            value={'' || newLocation}
            onChange={handleInputChanges}
          />
          <select name="newType" onChange={handleSelectChanges}>
            <option value='Coffee'>Coffee</option>
            <option value='Restaurants'>Restaurants</option>
            <option value="Events">Events</option>
            <option value="Brewery">Brewery</option>
          </select>
          <button type="submit">Save</button>
        </form>

      <Tacos venues={props.venues} 
            isDogLoading={props.isDogLoading}
            dogError={props.dogError}
            newLocation={newLocation}
            newType={newType}/>
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
  updateLocation,
  updateType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
