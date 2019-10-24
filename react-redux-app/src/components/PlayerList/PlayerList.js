import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Player from '../Player/Player.js';

import './PlayerList.scss';

import { fetchRoster } from '../../actions';

const PlayerList = props => {
    
    useEffect(() => {
        props.fetchRoster();
    }, [])
    
    if(props.isFetching){
        return <h2>Loading Roster</h2>
    }
    
    return (
        <div className='player-list'>
            {props.teamRoster.map((player, index) => {
                return <Player key={index} player={player} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        teamRoster: state.teamRoster,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchRoster };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);