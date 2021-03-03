import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { getSpecies, FETCH_SPECIES_FAILURE,FETCH_SPECIES_SUCCESS, FETCH_SPECIES_START } from '../actions/index';

// temporary initialState
let data = {
  speciesList: [
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
    "california sea Lion", 
    "steller sea lion", 
    "sea otter", 
    "other", 
    "unknown"
  ],
}

const SelectSpecies = (props) => {

  console.log("props: ", props);

  // helper function to handleClick
  const handleClick = (e) => {
    // dispatch to the action creator... change species state
    console.log("e.target.id: ", e.target.id) // gives species name
    // props.getSpecies(e.target.id);
    // props.getSpecies("orca");

    axios.get(`http://hotline.whalemuseum.org/api.json?species=${e.target.id}`) // plug in state here in ${species}

    // respond to happy path & sad path, updating state with API response
      .then(res => {
          console.log("res: ", res);
          props.getSpecies(res.data.species)
      })
      .catch(err => {
          console.log("error: ", err)
          // props.dispatch({ type: FETCH_SPECIES_FAILURE, payload: err });
      })

  }



  return (
    <>
      <h1>Select Species</h1>
      <div className="species-container">
        {
          data.speciesList.map(species => {
          return <button key={species} id={species} onClick={handleClick}>{species}</button>
          })
        }
      </div>
    </>
  )

};


// export default SelectSpecies;

// Redux step 3: connect components

const mapStateToProps = (state) => {
  return {
    // speciesList: state.speciesList
  }
};

const mapDispatchToProps = { getSpecies };

export default connect(mapStateToProps, mapDispatchToProps)(SelectSpecies);

// connect(mapStateToProps,mapDipatchToProps) returns a decorator function
// We then invoke that decorator on Title
// and magically, Title can now read from and write to the store
