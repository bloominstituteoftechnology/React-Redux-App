import React from 'react';
import { connect } from "react-redux";
import Sighting from '../components/Sighting';


const Sightings = (props) => {
  const { sightings } = props;
  console.log("SIGHTINGS: ", sightings);
  if (!sightings) {
    return <div> loading </div>
  }

  return (
    <>
      <h1>Sightings</h1>
      <div className="sightings-container">
        {
          props.sightings.map(sighting => {
          return <Sighting key={sighting.id} sighting={sighting} />
          })
        }
      </div>
    </>
  )

};


// Redux step 3: connect components

const mapStateToProps = (state) => {
  return {
    sightings: state.sightings
  }
};


export default connect(mapStateToProps, null)(Sightings);
