import React, { useEffect } from "react";
import { connect } from "react-redux";
import BasicCard from './BasicCard';
import { fetchPlayerData } from '../actions';

const PlayerCard = props => {
    useEffect(() => {
        props.fetchPlayerData();
    }, []);

    if (props.isFetching){
        return <h3>...Loading Info</h3>
    }
    console.log(props);
    return (
        <div className ='player-card'>
            {props.error && <p>{props.error}</p>}
            {props.players.map(player => (
                <BasicCard key={player.id} player={player} />
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
    mapStateToProps, { fetchPlayerData }
) (PlayerCard);