import React from 'react';

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

  // console.log("props: ", data.speciesList);

  // helper function to handleClick
  const handleClick = (e) => {
    // dispatch to the action creator... change species state
    console.log("e.target.id: ", e.target.id) // gives species name
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


export default SelectSpecies;