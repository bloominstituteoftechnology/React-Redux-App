import React from 'react';

const Card = (props) => {
    return (
        <div className = 'card'>
        <h2>{props.title}</h2>
        <p className = 'cases'>{props.cases}</p>
        <p className = 'date'>{props.date}</p>
    <p className = 'description'>Number of {props.description} of Corona Virus.</p>
        </div>
    )
}

export default Card;