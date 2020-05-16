import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRockets } from '../actions/fetchRockets';
import '../App.css';
import Rocket from './Rocket';
import logo from '../spacex-logo.svg';
import rocket from '../rocket.svg';

const RocketsList = props => {
  useEffect(() => {
    props.fetchRockets()
  }, [])

  return (
    <div className='rocket-list'>
      <h1>Rockets</h1>
      {props.rockets.map(rocket => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.rockets.isFetching,
    rockets: state.rockets.rockets,
    errors: state.rockets.errors
  }
}

export default connect(mapStateToProps, {fetchRockets})(RocketsList)