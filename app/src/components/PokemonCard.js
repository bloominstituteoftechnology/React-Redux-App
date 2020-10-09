import React from 'react';

const PokemonCard = props => {
    return (
        <div className="pokemon-card">
            <div className="card-image">
                <img src={props.image} alt={props.name}></img>
            </div>
        </div>
    );
}
 
export default PokemonCard;