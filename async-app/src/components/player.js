import React from 'react';

const Player = (props) => {
    return (
        <div className='player-points'>
            {console.log(`player log: ${props.state}`)}
            <p>Correct: {props.state.right}</p>
            <p>Wrong: {props.state.wrong}</p>
        </div>
    );
}
export default Player;