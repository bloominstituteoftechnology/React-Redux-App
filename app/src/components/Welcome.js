import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import trail from '../images/trail1.svg';
import trail2 from '../images/trail2.svg';
import rocket from '../images/rocket.svg';

const Welcome = () => {
  return (
    <>
    <div className='home'>
      <h1 className='title'>SpaceX Docs</h1>
      <p className='intro' >Learn more about SpaceX and their achievements in aerospace engineering. All data was gathered from the 
        <a className='api' href='https://docs.spacexdata.com/?version=latest'> SpaceX API.</a>
      </p>
      <Link className='learn' to='/info'><button href='/info'>Learn More</button></Link>
    </div>

    <img className='trail' src={trail} />
    <img className='trail2' src={trail2} />
    <img className='ship' src={rocket} />
    </>
  )
}

export default Welcome;