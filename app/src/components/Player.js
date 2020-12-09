import React from 'react';

export default function Player(props) {
    return (
        <div>
            <h3>Your cards:</h3>
            {props.cards.map(item => {
                return (<img src={item.image} alt={item.image} />)
            })}
        </div>
    )
}
