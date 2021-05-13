import React from 'react';
import { connect } from "react-redux"
import '../app.css';
//import { updateRegion } from "../actions"

const Header = (props) => {
  let {region} = props

  const handleRegionChange = (e) => {
    region = (e.target.value)
  }

  return (
    <div className="Header">
        <div className="header-text">
        <h1>Explore The World One Region At A Time</h1>
        <h3>Click Below To Select Region</h3>
        <label>
          Pick a Region
          <select onChange={handleRegionChange}>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </label>
        </div>
    </div>
  );
}


export default connect(null, {})(Header);
