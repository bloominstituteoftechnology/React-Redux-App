import React from 'react'



const CharacterCard = ({name, species, gender, image}) => {
    
    return(
        <div>
            <h2>{name}</h2>
            <img alt="hero">{image}</img>
            <p>{species}</p>
            <p>{gender}</p>
        </div>
    );
}

export default CharacterCard;