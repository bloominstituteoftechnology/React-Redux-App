import React from 'react'


function Display({ appearance: { gender, race, height }, name, image:{url}, work: { base }, connections }) {
    const group = connections["group-affiliation"]
  
    return (
        <div className="card">
            <h2>{name}</h2>
            <div>
            <img src={url} alt={name}/>
            </div>
            
            <h3>{race} </h3>
            <div className="ps">
               
                <p>{gender}</p>
                 
            </div>
            <p>{group}</p>
            <p className='base'>{base}
            </p>
        </div>
    )
}

export default Display
