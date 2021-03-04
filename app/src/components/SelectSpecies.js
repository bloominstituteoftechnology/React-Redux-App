import React from 'react';
import { connect } from "react-redux";
import { selectSpecies, getSpecies } from '../actions/index';

// component data
const speciesList = [
    "orca", 
    "minke", 
    "gray whale", 
    "humpback", 
    "atlantic white-sided dolphin", 
    "pacific white-sided dolphin", 
    "dalls porpoise", 
    "harbor porpoise", 
    "harbor seal", 
    "northern elephant seal", 
    "southern elephant seal", 
    "california sea lion", 
    "steller sea lion", 
    "sea otter", 
    "other", 
    "unknown"
];

const SelectSpecies = (props) => {

  const handleClick = (e) => {
    // dispatch to the action creator... change species state
console.log("e.target.id: ", e.target.id) // gives species name
    let selectedSpecies = e.target.id;
    props.selectSpecies(selectedSpecies);
    props.getSpecies();
  }


  return (
    <>
      <h1>Select Species</h1>
      <div className="species-container">
        {
          speciesList.map(species => {
          return <button key={species} id={species} onClick={handleClick} style={{backgroundColor: "dodgerBlue", color: "white"}}>{species}</button>
          })
        }
      </div>
    </>
  )

};


const mapDispatchToProps = { getSpecies, selectSpecies };

export default connect(null, mapDispatchToProps)(SelectSpecies);
