import React from 'react';
import { connect } from 'react-redux';

const List = props => {
    return (
        <div className='outer-card'>
        {props.error ? (
            <div className='error'>{props.error}</div>
        ) : (
            props.missions.map(mission =><div className='wrapper-card'>
             <div className='card'>{mission.mission_name}</div> 
             </div>)
        )}
        </div>
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