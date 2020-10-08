import React from 'react';
import { connect } from "react-redux"
import '../app.css';

const Header = () => {
  return (
    <div className="Header">
        <div className="header-text">
        <h1>Explore The World One Region At A Time</h1>
        <h3>Click Below To Select Region</h3>
        <label>
          Pick a Region
            <select>
            <option>---Stretch---</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
        </div>
    </div>
  );
}

export default connect(null, { })(Header);
