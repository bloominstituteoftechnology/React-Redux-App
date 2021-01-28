import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getGames } from '../actions/index'


const GameList = (props) => {


    useEffect(() => {
        props.getGames()
    }, []);

    return (
        <div>
            <h2>Game Deals, Don't Miss Out!</h2>
            {props.isLoading ? <p>Loading Game Data...</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            {props.games.map(game => (
                <div>
                    <h4>{game.internalName}</h4>
                </div>
            ))}
        </div>
    );
};

const mapStatetoProps = (state) => {
    return {
        isLoading : state.isLoading,
        games : state.gameDeals,
        error : state.error
    }
}

export default connect(mapStatetoProps, {getGames})(GameList);