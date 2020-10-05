import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  return (
    <>
    <div className='home'>
      <h1 className='title'>SpaceX Docs</h1>
      <p className='intro' >Learn more about SpaceX and their achievements in aerospace engineering. All data was gathered from the {" "}
        <a className='api' href='https://docs.spacexdata.com/?version=latest'>SpaceX API</a>.
      </p>
      <Link className='learn' to='/info'><button href='/info'>Learn More</button></Link>
    </div>
    </>
  )
}

export default Welcome;