import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../actions';

import Card from './Card';

const PlayerCard = props => {
    useEffect(() => {
        props.fetch();
    }, []);

    if (props.isFetching){
        return <h2>Loading Player Cards...</h2>;
    }
    console.log(props)
    return (
        <div className='player-card'>
            {props.error && <p>{props.error}</p>}
            {props.players.map(player => (
                <Card key={player.id} player={player} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps, { fetch }
)(PlayerCard);