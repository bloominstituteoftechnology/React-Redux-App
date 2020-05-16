import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import trail from '../trail1.svg';
import trail2 from '../trail2.svg';
import rocket from '../rocket.svg';

const Welcome = () => {
  return (
    <div className='home'>
      <h1 className='title'>SpaceX Docs</h1>
      <p className='intro' >Learn more about SpaceX and their achievements in aerospace engineering. All data was gathered from the 
        <a className='api' href='https://docs.spacexdata.com/?version=latest'> SpaceX API.</a>
      </p>
      <button href='/info'><Link className='learn' to='/info'>Learn More</Link></button>
      <img className='trail' src={trail} />
      <img className='trail2' src={trail2} />
      <img className='ship' src={rocket} />
    </div>
  )
}

export default Welcome;