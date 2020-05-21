import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchMissions } from '../actions/fetchMissions';
import '../App.css';
import twitter from '../images/twitter.svg';

const MissionList = props => {
  useEffect(() => {
    props.fetchMissions();
  }, [])

  return (
    <div>
      <h1 className='missions-title'>Missions</h1>
      {props.missions.map(mission =>(
        <div className='mission' key={mission.id}>
          <h2 className='mission-title'><a href={mission.website}>{mission.mission_name}</a></h2>
          <p>{mission.description.length > 200 ? 
        (
          <p className='reduced'>{`${mission.description.substring(0, 207)}...`}</p>
        ) : <hp>{mission.description}</hp>}
          </p>
          <div className='actions'>
            <a href={mission.website}><button>Learn More</button></a>
            <a href={mission.twitter}><img  className='icon' src={twitter}></img></a>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.missions.isFetching,
    missions: state.missions.missions,
    errors: state.missions.errors
  }
}

export default connect(mapStateToProps, {fetchMissions})(MissionList);