import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRockets } from '../actions/action';
import '../App.css';
import Rocket from './Rocket';
import logo from '../spacex-logo.png';
import rocket from '../rocket.svg';

const RocketList = props => {
  useEffect(() => {
    props.fetchRockets();
  }, [])

  return (
    <div className='rocket-list'>
      <div className='header'>
        <img className='logo' src={logo}></img>
        <h1 className='title'>THE ROCKET LIST</h1>
        <img className='rocket' src={rocket}></img>
      </div>
      <div className='container'>
      {props.isFetching && <h2>Loading...</h2>}
      {props.rockets &&
        props.rockets.map(rocket => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))
      }
      </div>
      <h3 className='end'>THE END</h3>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.isFetching,
    rockets: state.rockets,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {fetchRockets})(RocketList);