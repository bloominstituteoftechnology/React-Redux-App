import React from 'react';
import { connect } from 'react-redux';

const List = props => {
    return (
        <>
        {props.error ? (
            <div className='error'>{props.error}</div>
        ) : (
            props.missions.map(mission => <div>{mission.mission_name}</div>)
        )}
        </>
    )
};
const mapStateToProps = state => {
    return {
        missions: state.missions,
        error: state.error
    };
};
export default connect(
    mapStateToProps,
    {}
)(List);