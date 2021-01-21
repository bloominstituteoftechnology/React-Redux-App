import React from 'react'

const Card = ({image, name, status, gender, species }) =>  {
return (
    <>
        <img src={image} alt='img' />
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
    </>
)
}

export default Card;