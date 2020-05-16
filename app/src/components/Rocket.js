import React from 'react';
import '../App.css';

const Rocket = props => {
  return (
    <div className='rocket-card'>
      <img src={props.rocket.flickr_images[0]} alt='rocket'></img>
      <div className='card-content'>
        <h2>{props.rocket.rocket_name}</h2>
        <h3>Height: {props.rocket.height.feet} ft</h3>
        <h3>First Flight: {props.rocket.first_flight}</h3>
        <p>{props.rocket.description}</p>
      </div>
    </div>
  );
}

export default Rocket;