import React from 'react';
import { connect } from "react-redux";
//import styled from 'styled-components';
import "../app.css"

function CountryCard(props) {
    const {capital, flag, subregion, population, name} = props.item
  return (
    <div className="card">
        <div className="info">
        <img src={flag} alt={name} />
        <h2>{name}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Subregion: {subregion}</p>
        </div>

    </div>
  );
}

export default connect(null, {})(CountryCard);