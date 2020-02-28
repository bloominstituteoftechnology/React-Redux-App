import React from 'react'
import './HousesCard.css'



const HousesCard = props => {
    return (
        <div className='houses-card-container'>

    <h1>{props.houses.name}</h1>
    <p>Region: {props.houses.region}</p>
        </div>
    )
}

export default HousesCard