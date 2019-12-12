import React from 'react';
import { Link } from 'react-router-dom';

const MinionCard = props => {
    return (        
        <div className='minion-card'>
            <Link to={`/${props.minion.ID}`}>
                <img className='minion-icon' src={`https://xivapi.com${props.minion.Icon}`} alt={props.minion.Name} />
                <h3 className='minion-name'>{props.minion.Name}</h3>
            </Link>
        </div>        
    );
};

export default MinionCard;