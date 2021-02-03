import React from 'react';

const Film = props => {
    return (
        <div className="film">
            <h2>Title: {props.title}</h2>
            <p>Description: {props.description}</p>
        </div>
    )
};

export default Film;