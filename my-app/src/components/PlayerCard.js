import React, { useEffect } from "react";
import { connect } from "react-redux";
import BasicCard from './BasicCard';
import { fetchPlayerData } from '../actions';
import styled from 'styled-components';

const Player = styled.div`
    display: flex;
    flex-wrap: wrap;
    // background: white;
    justify-content: space-around;
    margin: 0 auto;
    // border: 1px solid red;
`;

const PlayerCard = props => {
    useEffect(() => {
        props.fetchPlayerData();
    }, []);

    if (props.isFetching){
        return <h3>...Loading Info</h3>
    }
    console.log(props);
    return (
        <Player className='player-card'>
            {props.error && <p>{props.error}</p>}
            {props.players.map(player => (
                <BasicCard key={player.id} player={player} />
            ))}
        </Player>
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

// 'our connected component is using a mapStateToProps function to map pieces of our state tree to this components props