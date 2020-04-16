import React from "react";

const PokemonCard = props => {
  return (
    <div className="card">
      <img src={props.sprite} alt="pokemon sprite"></img>
      <p>{props.pokemon.name.toUpperCase()}</p>
      <p>Height: {props.pokemon.height / 10}m</p>
      <p>Weight: {props.pokemon.weight / 10}kg</p>
      <p>
        {props.pokemon.types.map(type => {
          if (type.type.name === "normal") {
            return (
              <span className="normal">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "fighting") {
            return (
              <span className="fighting">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "electric") {
            return (
              <span className="electric">{type.type.name.toUpperCase()}</span>
            );
          }
        })}
      </p>
    </div>
  );
};

export default PokemonCard;
