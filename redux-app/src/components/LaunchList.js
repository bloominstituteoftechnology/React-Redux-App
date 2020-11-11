import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Launch from './Launch';
import { getLaunches } from '../actions/LaunchListActions';

const LaunchList = (props) => {
    const state = useSelector( state => state )
    return (
        <>
        <button onClick={props.getLaunches}>Get Launches</button>
        {state.launches && state.launches.map((launch)=><Launch launch={launch}/>)}
        </>
    )
}

const mapStateToProps = state => {
    return state;
  };

export default connect(
    mapStateToProps,
    { getLaunches }
  )(LaunchList);