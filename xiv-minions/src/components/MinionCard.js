import React from 'react';
import { Link } from 'react-router-dom';

const MinionCard = props => {
    return (
        <Link to={`/${props.minion.ID}`}>
            <div className='minion-card'>
                <img className='minion-icon' src={`https://xivapi.com${props.minion.Icon}`} alt={props.minion.Name} />
                <h3 className='minion-name'>{props.minion.Name}</h3>
            </div>
        </Link>
    );
};

export default MinionCard;