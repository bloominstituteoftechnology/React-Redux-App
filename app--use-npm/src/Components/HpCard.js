import React from 'react';


const Character = (props) =>{
    return (
        <div className = "character_wrapper">
             {props.character.map(char =>{console.log(char)
                return <div className="character" >
                  <h4 key={char.id}>{char.name}</h4>  
                  <div className="character_info">
             <h5 key={char.id}>House {char.house}</h5>
             <h5 key={char.id}>Role: {char.role}</h5>
             <h5 key={char.id}>School: {char.school}</h5>
             <h5 key={char.id}>Species: {char.species}</h5>
                  </div>
                </div>
            })} 
        </div>
    )
}

export default Character;